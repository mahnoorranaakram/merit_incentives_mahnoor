import { connect } from "react-redux";
import Listing from "./component";
import {deleteListhandler,editListhandler} from "./actions"

const mapStateToProps = (state) => ({
  listTableData: state.LISTING.data.todoList,
  getTableData: state.ADD_LIST.data.gettodoList,


});

const mapDispatchToProps = (dispatch, props) => ({
  deleteListhandler: (id_del) => {
    dispatch(deleteListhandler(id_del));
  },
  editListhandler: (id_del) => {
    dispatch(editListhandler(id_del));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Listing);
