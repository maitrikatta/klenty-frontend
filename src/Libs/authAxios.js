import axios from "axios";
const authAxios = axios.create({
  baseURL: "http://localhost:5555/api/v1",
});
authAxios.interceptors.request.use(
  (request) => {
    request.headers.Authorization =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2ZjOTZhMTcwOTIzNjM1NGM4YjZlZjQiLCJ1c2VybmFtZSI6IllvZ2VzaCBLYWtkZSIsImlhdCI6MTY3NzQ5ODAyOSwiZXhwIjoxNjgwMDkwMDI5fQ.46CKuRr0kX9BxIhXYKJ3-S-L8vzVP02yVJubExQWVfQ";
    return request;
  },
  (error) => {
    console.log(`auth not found: ${error}`);
    return Promise.reject(error);
  }
);

export default authAxios;
