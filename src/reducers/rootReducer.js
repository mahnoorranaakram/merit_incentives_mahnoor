import { addListReducer } from "../components/AddList/addListReducer";
import { listingReducer } from "../components/Listing/listingReducer";

import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";

const rootReducer = reduceReducers(
  combineReducers({
    ADD_LIST: addListReducer,
    LISTING: listingReducer,
  })
);

export default rootReducer;
