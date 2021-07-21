import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessage: (message) => {
      dispatch(updateNewMessageCreator(message))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
