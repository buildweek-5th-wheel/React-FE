import AuthRoute from "../AuthRoute";
import { types } from "./index";

/** LOGIN USER */
export const doSignIn = data => dispatch => {
  dispatch({ type: types.LOGIN_START });
  return AuthRoute()
    .post("/auth/login", data)
    .then(res => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_FAIL, payload: err });
      console.log(err.response);
    });
};

/** REGISTER USER */
export const doRegister = data => dispatch => {
  dispatch({ type: types.REGISTER_USER_START });
  return AuthRoute()
    .post("/auth/register", data)
    .then(res => {
      dispatch({ type: types.REGISTER_USER_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
    })
    .catch(err => {
      dispatch({ type: types.REGISTER_USER_FAIL, payload: err });
      console.log(err.response);
    });
};
