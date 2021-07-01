import _ from "lodash";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      break;
    case SEND_MESSAGE:
      const newText = {
        id: _.uniqueId(),
        type: '',
        text: state.newMessageText
      }
      state.messages.push(newText);
      state.newMessageText = '';
      break;
    default:
      return state;

  }
  return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageCreator = (newMessage) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newMessage});

export default dialogsReducer;
