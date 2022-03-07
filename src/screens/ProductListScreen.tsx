import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  deleteProduct,
  getProducts,
  createProduct,
  createProductReset,
} from "../actions/productActions";

function ProductListScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, products } = useSelector(
    (state: any) => state.productList
  );
  const { userInfo } = useSelector((state: any) => state.userLogin);
  const {
    success,
    error: errorDelete,
    loading: loadingDelete,
  } = useSelector((state: any) => state.productDelete);
  const {
    success: productCreateSuccess,
    error: errorCreateProduct,
    product: createdProduct,
    loading: loadingCreateProduct,
  } = useSelector((state: any) => state.productCreate);

  useEffect(() => {
    dispatch(createProductReset());
    if (!userInfo.isAdmin) {
      navigate("/login");
    }
    if (productCreateSuccess) {
      navigate(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(getProducts());
    }
  }, [
    dispatch,
    navigate,
    getProducts,
    success,
    userInfo,
    productCreateSuccess,
  ]);

  const deleteHandler = (id: any) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct({ id }));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="=text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i>Create Product
          </Button>
        </Col>
        {loadingCreateProduct && <Loader />}
        {errorDelete && (
          <Message variant="danger">{errorCreateProduct}</Message>
        )}
        {/* {loadingDelete && <Loader/>} */}
        {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product: any) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit" />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fas fa-trash" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default ProductListScreen;
