import React from "react";
import { types } from "../actions";

const initialState = {
  listingItems: [],
  isLoading: false,
  errors: null,
  isSuccess: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LISTING_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.GET_LISTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        listingItems: action.payload
      };
    case types.GET_LISTING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload.err
      };
    case types.POST_LIST_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.POST_LIST_SUCCESS:
      const updatedList = [...state.listingItems, payload];
      return {
        ...state,
        errors: null,
        listingItems: updatedList,
        isSuccess: false
      };
    case types.POST_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
        isSuccess: false
      };

    default:
      return state;
  }
};
