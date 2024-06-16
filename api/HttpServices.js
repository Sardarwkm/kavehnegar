// import { message } from "antd";
import axios from "axios";
// import { getSession } from "next-auth/react";
// import { signOut } from "next-auth/react";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Expose-Headers"] = "*";

// axios.interceptors.request.use(
//   async (request) => {
//     const session = await getSession();

//     if (session) {
//       request.headers["x-auth-token"] = `${session.user.accessToken}`;
//     }
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );
axios.interceptors.response.use(
  (response) => {
    // Edit response config
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Assuming the user has expired token
      // message.error("لطفا مجددا وارد شوید!");
      // Can be logged out, clear the tokens and redirect to the login page
      // signOut();
    }
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(null, (error) => {
  // We can have our expected responses configured
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    // if not expected, can be handled as per interest
    // for the sake of simplicity, I'm just gonna show a message and write the error in the console
    // message.error("مشکلی از سمت سرور رخ داده است.");
    console.error(error.response);
  }
  return Promise.reject(error);
});
const configured = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default configured;
