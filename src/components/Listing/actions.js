export const LISTING= "LISTING";
export const DEL_LISTING= "DEL_LISTING";
export const EDIT_LISTING= "EDIT_LISTING";
export const listinghandler = () => (dispatch) => {
  dispatch({
    type: LISTING,
  });
};

export const deleteListhandler = (id_del) => (dispatch) => {
  dispatch({
    type: DEL_LISTING,
    payload : id_del
  });
};


export const editListhandler = (id_edit) => (dispatch) => {
  dispatch({
    type: EDIT_LISTING,
    payload : id_edit
  });
};

