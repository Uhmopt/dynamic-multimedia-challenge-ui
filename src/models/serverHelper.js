import { API_BASE } from "config";
import axios from "lib/http";

export const serverGet = ({
  url = "",
  data = {},
  onFinish = () => {},
  onError = () => {},
  ...params
}) => {
  axios
    .get(`${API_BASE}/api/${url}`, data)
    .then(({ data: response }) => {
      onFinish(response);
    })
    .catch((err) => {
      console.log(err);
      let msg =
        "status code: " +
        err.response?.status +
        ". " +
        err.response?.data?.message +
        " ";
      let errors = err?.response?.data?.errors;
      for (let key in errors) {
        msg += errors[key];
      }
      const data = {
        status: "error",
        message: msg,
      };
      onError(data);
    });
};

// url, data, onError,
export const serverPost = ({
  url = "",
  data = {},
  onError = () => {},
  onFinish = () => {},
  ...params
}) => {
  axios
    .post(`${API_BASE}/api/${url}`, data)
    .then(({ data: response }) => {
      onFinish(response);
      onError({ status: "success", message: "Successfully Saved." });
    })
    .catch((err) => {
      console.log(err);
      let msg =
        "status code: " +
        (err?.response?.status ?? "") +
        ". " +
        (err?.response?.data?.message ?? "") +
        " ";
      let errors = err?.response?.data?.errors;
      for (let key in errors) {
        msg += errors[key];
      }
      const data = {
        status: "error",
        message: msg,
      };
      onError(data);
      onError(data);
    });
};
