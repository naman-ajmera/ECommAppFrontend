import axios from "axios";

export function createOrderRequest(payload, userInfo) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.post(
    `${process.env.API_URL}/api/orders`,
    {
      orderItems: payload.orderItems,
      shippingAddress: payload.shippingAddress,
      paymentMethod: payload.paymentMethod,
      itemsPrice: payload.itemsPrice,
      taxPrice: payload.taxPrice,
      shippingPrice: payload.shippingPrice,
      totalPrice: payload.totalPrice,
    },
    config
  );
}

export function getOrderDetailsRequest(payload, userInfo) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.get(`${process.env.API_URL}/api/orders/${payload.id}`, config);
}

export function payOrderRequest(payload, userInfo) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.put(
    `${process.env.API_URL}/api/orders/${payload.id}/pay`,
    {
      id: payload.paymentResult.id,
      status: payload.paymentResult.status,
      update_time: payload.paymentResult.update_time,
      email_address: payload.paymentResult.payer.email_address,
    },
    config
  );
}

export function deliverOrderRequest(payload, userInfo) {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.put(
    `${process.env.API_URL}/api/orders/${payload.id}/deliver`,
    {},
    config
  );
}

export function orderListRequest(userInfo) {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.get(`${process.env.API_URL}/api/orders/myorders`, config);
}

export function orderAllListRequest(userInfo) {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.get(`${process.env.API_URL}/api/orders`, config);
}
