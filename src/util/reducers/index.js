import { combineReducers } from "redux";

import authReducer from "./authReducer";
import listingReducer from "./listingReducer";

export default combineReducers({
  authReducer,
  listingReducer
});
