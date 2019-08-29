import { types } from "../actions";

const initialState = {
  token: "",
  user: {
    username: "",
    password: "",
    bio: "",
    image_url: "",
    bookings: [],
    listings: []
  },
  isAuth: false,
  isLoading: false,
  errors: null,
  isSuccess: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    /** LOGIN */
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isAuth: false
      };
    case types.LOGIN_SUCCESS:
      console.log(payload);
      return {
        ...state,
        token: payload.token,
        user: { ...state.user, id: payload.id },
        isAuth: true,
        isLoading: false,
        isSuccess: true
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        errors: payload,
        isLoading: false
      };

    /** REGISTER USER*/
    case types.REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isAuth: false,
        user: {},
        isSuccess: false
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        isAuth: false,
        user: { ...state.user, id: payload.id },
        isSuccess: true
      };
    case types.REGISTER_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
        isAuth: false,
        user: {},
        isSuccess: false
      };

    case types.GET_USER_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isAuth: true,
        isSuccess: false
      };

    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isSuccess: true
      };

    case types.GET_USER_FAILURE:
      return {
        ...state,
        errors: payload,
        isLoading: false
      };

    case types.EDIT_USER_START:
      return {
        ...state,
        isLoading: true,
        isAuth: true,
        isSuccess: false
      };

    case types.EDIT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          username: payload.username,
          password: payload.password,
          bio: payload.bio,
          image_url: payload.image_url
        },
        isSuccess: true
      };
    case types.EDIT_USER_FAILURE:
      return {
        ...state,
        errors: payload,
        isLoading: false
      };

    case types.DELETE_USER_START:
      return {
        ...state,
        isLoading: true,
        isAuth: true,
        isSuccess: false
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: payload,
        isSuccess: true
      };
    case types.DELETE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    case types.BOOKING_LISTING_START:
      return {
        ...state,
        isLoading: true,
        isAuth: true,
        isSuccess: false
      };
    case types.BOOKING_LISTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isSuccess: true,
        user: { ...state.user, bookings: state.user.bookings.push(payload) }
      };
    case types.BOOKING_LISTING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case types.DELETE_BOOKING_START:
      return {
        ...state,
        isLoading: true,
        isAuth: true,
        isSuccess: false
      };
    case types.DELETE_BOOKING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isSuccess: true,
        user: {
          ...state.user,
          bookings: state.user.bookings.filter(
            booking => booking.booking_id !== payload.booking_id
          )
        }
      };
    case types.DELETE_BOOKING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };

    /** SET AUTH */
    case types.SET_AUTH:
      return {
        ...state,
        isAuth: payload
      };

    default:
      return state;
  }
};
