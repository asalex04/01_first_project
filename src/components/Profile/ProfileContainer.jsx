import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile_reducer";

// const proxy = 'https://hexlet-allorigins.herokuapp.com';
// const link = `https://social-network.samuraijs.com/api/1.0/profile/2`;
// const proxyUrl = (link) => {
//   const newUrl = new URL('/get', proxy);
//   newUrl.searchParams.set('url', link);
//   return newUrl.toString();
// }

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile {...this.props} />
    )
  }
}
const mapStateToProps = (state) => ({
  a: 13
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
