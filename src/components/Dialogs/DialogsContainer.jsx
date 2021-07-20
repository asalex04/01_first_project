import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";

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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
