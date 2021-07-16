import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {seAuthUserData} from "../../redux/auth_reducer";
import {usersAPI} from "../../api/api";


class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getAuth()
      .then(response => {
          const {id, login, email} = response.data
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
