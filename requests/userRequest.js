import axios from "axios";

export function requestLogin(payload) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(
    "http://localhost:5000/api/users/login",
    {
      email: payload.email,
      password: payload.password,
    },
    config
  );
}

export function requestRegister(payload) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(
    "http://localhost:5000/api/users",
    {
      email: payload.email,
      name: payload.name,
      password: payload.password,
    },
    config
  );
}

export function requestUserDetails(payload, userInfo) {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.get(`http://localhost:5000/api/users/${payload.id}`, config);
}

export function requestUpdateUserDetails(payload, userInfo) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.put(
    "http://localhost:5000/api/users/profile",
    {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      password: payload.password,
    },
    config
  );
}

export function requestUserList(userInfo) {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.get("http://localhost:5000/api/users", config);
}

export function requestUserDelete(payload, userInfo) {
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.delete(`http://localhost:5000/api/users/${payload.id}`, config);
}

export function userUpdateRequest(payload, userInfo) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
  return axios.put(
    `http://localhost:5000/api/users/${payload.id}`,
    {
      name: payload.name,
      email: payload.email,
      isAdmin: payload.isAdmin,
    },
    config
  );
}
