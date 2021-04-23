import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export const ADD_LIST= "ADD_LIST";

export const addlisthandler = (addDataForm) => (dispatch) => {
  dispatch({
    type: ADD_LIST,
    payload:addDataForm,
  });
  toast.success("Successfully Added TodoList", {position: toast.POSITION.TOP_RIGHT})

};
