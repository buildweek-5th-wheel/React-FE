import { types } from "../actions";

const initialState = {
  token: "",
  user: null,
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
    case type.LOGIN_SUCCESS:
      console.log(payload.user);
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isAuth: true,
        isLoading: false,
        isSuccess: true
      };
    case types.LOGIN_FAIL:
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
        user: {},
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
