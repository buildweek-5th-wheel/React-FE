import AuthRoute from "../AuthRoute";
import axios from "axios";
import { types } from "./index";

//Get Listing from server

export const getListing = () => dispatch => {
  dispatch({ type: types.GET_LISTING_START });
  return axios
    .get(`https://bw-5th-wheel.herokuapp.com/listings`)
    .then(res =>
      dispatch({ type: types.GET_LISTING_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: types.GET_LISTING_FAILURE, payload: err }));
};
