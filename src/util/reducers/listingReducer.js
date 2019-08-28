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
      return {
        ...state,
        errors: null,
        isSuccess: true
      };
    case types.POST_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
        isSuccess: false
      };

    case types.UPDATE_LISTING_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    case types.UPDATE_LISTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        listingItems: payload,
        isSuccess: true
      };

    case types.UPDATE_LISTING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
        isSuccess: false
      };

    case types.DELETE_LISTING_START:
      return {
        ...state,
        isLoading: true,
        errors: null
      };

    case types.DELETE_LISTING_SUCCESS:
      const updatedListing = state.listingItems.filter(
        item => item.listing_id !== payload
      );
      return {
        ...state,
        isLoading: false,
        errors: null,
        listingItems: updatedListing
      };

    case types.DELETE_LISTING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    default:
      return state;
  }
};
