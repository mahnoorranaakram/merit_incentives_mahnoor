import { connect } from "react-redux";
import PublicRoute from "./component";

const mapStateToProps = state => ({
    isAuthenticated: true,
})

const mapDispatchToProps = (dispatch, props) => ({
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(PublicRoute);