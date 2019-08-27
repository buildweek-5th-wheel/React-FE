import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://bw-5th-wheel.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      token: token
    }
  });
};

export default axiosWithAuth;
