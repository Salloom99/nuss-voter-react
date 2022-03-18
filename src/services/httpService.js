import axios from "axios";
import { notify } from './../components/common/snackbar';


axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

    if (!expectedError) {
    console.log("Logging the error", error);
    notify("حدث خطأ ما غير متوقع!");
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = `JWT ${jwt}`;
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};

export default http;
