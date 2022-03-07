import React, { useEffect, useState } from "react";
import { Col, Row, ListGroup, Image, Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import Message from "../components/Message";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../actions/orderActions";
import Loader from "../components/Loader";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";

declare global {
  interface Window {
    paypal: any;
  }
}
function OrderScreen() {
  const params = useParams();
  const dispatch = useDispatch();

  const [sdkReady, setSdkReady] = useState(false);

  const { orderItems, loading, error } = useSelector(
    (state: any) => state.orderDetails
  );

  const { success, loading: loadingPay } = useSelector(
    (state: any) => state.orderPay
  );

  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  const { success: successDelivered, loading: loadingDeliverd } = useSelector(
    (state: any) => state.orderDeliver
  );

  if (!loading) {
    orderItems.itemsPrice =
      orderItems.orderItems &&
      orderItems.orderItems.reduce(
        (acc: any, item: any) => acc + item.qty * item.price,
        0
      );
  }

  useEffect(() => {
    const addPapPalScript = async () => {
      const { data: clientId } = await axios.get(
        "http://localhost:5000/api/config/paypal"
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=buttons`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    // addPapPalScript()
    if (
      !orderItems ||
      success ||
      successDelivered ||
      orderItems._id !== params.id
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails({ id: params.id }));
    } else if (!orderItems.isPaid) {
      if (!window.paypal) {
        addPapPalScript();
      }
    } else {
      setSdkReady(true);
    }
  }, [dispatch, params, orderItems, success, successDelivered]);

  const successPaymentHandler = (paymentResult: any) => {
    dispatch(payOrder({ id: orderItems._id, paymentResult }));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder({ id: orderItems._id }));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>
        Order
        {orderItems._id}
      </h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>
                {orderItems.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${orderItems.user.email}`}>
                  {orderItems.user.email}
                </a>
              </p>
              <p>
                <strong>Address:</strong>
                {orderItems.shippingAddress.address},{" "}
                {orderItems.shippingAddress.city}{" "}
                {orderItems.shippingAddress.postalCode},{" "}
                {orderItems.shippingAddress.country}
              </p>
              {orderItems.isDelivered ? (
                <Message variant="success">
                  Delivered on {orderItems.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {orderItems.paymentMethod}
              </p>
              {orderItems.isPaid ? (
                <Message variant="success">
                  Paid on
                  {orderItems.paidAt}
                </Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              <strong>Method: </strong>
              {orderItems.orderItems.length === 0 ? (
                <Message>Your Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {orderItems.orderItems.map((item: any, index: any) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            fluid
                            rounded
                            src={item.image}
                            alt={item.image}
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x{item.price} = $
                          {Number(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${orderItems.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${orderItems.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${orderItems.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${orderItems.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!orderItems.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={orderItems.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </ListGroup.Item>
              )}
              {loadingDeliverd && <Loader />}
              {userInfo.isAdmin &&
                orderItems.isPaid &&
                !orderItems.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-block"
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default OrderScreen;
