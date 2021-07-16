import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {seAuthUserData} from "../../redux/auth_reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })

      .then(response => {
          const {id, login, email} = response.data.data
          this.props.seAuthUserData(id, email, login)
      })
  }

  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps, {seAuthUserData}) (HeaderContainer);
