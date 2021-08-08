import _ from "lodash";

const SEND_MESSAGE = 'SEND-MESSAGE'
export type InitialStateType = typeof initialState

type DialogsType = {
  id: number,
  name: string,
  ava: string,
}
type MessagesType = {
  id: number,
  type: string,
  text: string,
}
const initialState = {
  dialogs: [
    {id: 1, name: 'Dimych', ava: 'https://ru-static.z-dn.net/files/dcd/4e5cc0ed36e2dd53bf9518fd16a72492.jpg'},
    {id: 2, name: 'Andrey', ava: 'https://friendtok.com/upload/photos/2021/03/BlRShw5IG5475RTXDDug_13_a14f8774a0d7d770faff995ddbbac266_avatar_full.jpg'},
    {id: 3, name: 'Sveta', ava: 'https://demotivation.ru/wp-content/uploads/2020/11/d5ebbfe10aff8e9a5c281400a2151b20-digital-illustration-design-illustrations.jpg'},
    {id: 4, name: 'Sasha', ava: 'https://i.pinimg.com/736x/49/77/fe/4977fe60931071da34910703120c6040.jpg'},
  ] as Array<DialogsType>,
  messages: [
    {id: 1, type: 'question', text: 'Hi'},
    {id: 2, type: 'answer', text: 'How is your it-kamasutra?'},
    {id: 3, type: 'question', text: 'Yes'},
    {id: 4, type: 'answer', text: 'Yo'},
  ] as Array<MessagesType>,

}

const dialogsReducer = (state=initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const newText = {
        id: _.uniqueId(),
        type: '',
        text: action.newMessageBody
      }
      return  {
        ...state,
        messages: [ ...state.messages, newText ],
      }
    }
    default:
      return state;
  }
}

type SendMessageCreatorType = {
  type: typeof SEND_MESSAGE,
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorType => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
