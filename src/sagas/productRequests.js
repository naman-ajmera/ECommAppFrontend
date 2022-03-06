import axios from "axios";

export function requestGetProducts(keyword, pageNumber) {
  return axios.get(
    `http://localhost:5000/api/products?keyword=${keyword || ""}&pageNumber=${
      pageNumber || ""
    }`
  );
}

export function requestGetProductDetails(payload) {
  return axios.get(`http://localhost:5000/api/products/${payload.id}`);
}

export function productReviewCreateRequest(payload, userInfo) {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.post(
    `http://localhost:5000/api/products/${payload.id}/reviews`,
    { rating: payload.rating, comment: payload.comment },
    config
  );
}

export function getTopProductsRequest() {
  return axios.get("http://localhost:5000/api/products/top");
}

export function requestProductDelete(payload, userInfo) {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.delete(
    `http://localhost:5000/api/products/${payload.id}`,
    config
  );
}

export function requestProductCreate(payload, userInfo) {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.post(`http://localhost:5000/api/products/`, {}, config);
}

export function requestProductUpdate(payload, userInfo) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.put(
    `http://localhost:5000/api/products/${payload.id}`,
    {
      name: payload.name,
      price: payload.price,
      brand: payload.brand,
      category: payload.category,
      countInStock: payload.countInStock,
      description: payload.description,
      image: payload.image,
    },
    config
  );
}
