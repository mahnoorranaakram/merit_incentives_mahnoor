import { connect } from "react-redux";
import AddList from "./component";
import {addlisthandler} from "./actions"

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, props) => ({
  addlisthandler: (addDataForm) => {
    dispatch(addlisthandler(addDataForm));
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
)(AddList);
