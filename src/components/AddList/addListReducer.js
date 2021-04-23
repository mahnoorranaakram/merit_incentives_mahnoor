import { ADD_LIST } from "./actions";

export const addListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST: {
      return {
        ...state,
        data: {
          ...state.data,
          gettodoList:[action.payload]
        }

      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
