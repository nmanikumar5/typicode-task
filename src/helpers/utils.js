import axios from "axios";

export const getCall = url =>
  axios
    .get(url)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const postCall = (url, payload = {}) =>
  axios.post(url, payload)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));