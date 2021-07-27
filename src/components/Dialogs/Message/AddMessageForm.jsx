import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import React from "react";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               name={'newMessageBody'}
               placeholder='Enter your message'
               validate={[required, maxLength100]}
        />
      </div>
      <div><button>Add post</button></div>
    </form>
  )
}
export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
