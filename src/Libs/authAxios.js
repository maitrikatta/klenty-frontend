import axios from "axios";
const authAxios = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
authAxios.interceptors.request.use(
  (request) => {
    request.headers.Authorization =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2UzYTM1ZjdmMjM3NzBjZjg5ZGFlODEiLCJ1c2VybmFtZSI6IkJpbGwgR2F0ZXMiLCJpYXQiOjE2NzYwMzkyMTYsImV4cCI6MTY3ODYzMTIxNn0.P_1Cwm1gAnf0UIECy8G9S_L1Z2NigU5FbTmaOlGVd4Q";
    return request;
  },
  (error) => {
    console.log(`auth not found: ${error}`);
    return Promise.reject(error);
  }
);

export default authAxios;
