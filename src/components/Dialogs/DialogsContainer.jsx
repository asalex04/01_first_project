import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;
