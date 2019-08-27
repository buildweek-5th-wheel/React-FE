import AuthRoute from "../AuthRoute";
import axios from "axios";
import { types } from "./index";

//Get Listing from server

export const getListing = () => dispatch => {
  dispatch({ type: types.GET_LISTING_START });
  return axios
    .get(`https://bw-5th-wheel.herokuapp.com/listings`)
    .then(res => {
      //console.log("CHECK THIS PART", res.data);
      dispatch({ type: types.GET_LISTING_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: types.GET_LISTING_FAILURE, payload: err }));
};

export const postListing = lists => dispatch => {
  dispatch({ type: types.POST_LIST_START });
  return AuthRoute()
    .post("/listings", lists)
    .then(res => {
      dispatch({ type: types.POST_LIST_SUCCESS, payload: lists });
    })
    .catch(err => {
      dispatch({ type: types.POST_LIST_FAILURE, payload: err });
    });
};

export const updateListing = lists => dispatch => {
  dispatch({ type: types.UPDATE_LISTING_START });
  return AuthRoute()
    .put(`/listings/${lists.listing_id}`, lists)
    .then(res =>
      dispatch({ type: types.UPDATE_LISTING_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: types.UPDATE_LISTING_FAILURE, payload: err })
    );
};

export const deleteListing = id => dispatch => {
  dispatch({ type: types.DELETE_LISTING_START });
  return AuthRoute()
    .delete(`/listings/${id}`)
    .then(res =>
      dispatch({
        type: types.DELETE_LISTING_SUCCESS,
        payload: id
      })
    )
    .catch(err =>
      dispatch({ type: types.DELETE_LISTING_FAILURE, payload: err })
    );
};
