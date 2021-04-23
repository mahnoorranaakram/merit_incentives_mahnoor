import { LISTING } from "./actions";

export const listingReducer = (state = [], action) => {
  switch (action.type) {
    case LISTING: {
      return {};
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
