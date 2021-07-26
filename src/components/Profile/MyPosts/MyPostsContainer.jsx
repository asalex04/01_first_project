import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   updateNewPost: (text) => {
      dispatch(updateNewPostActionCreator(text))
    },
    addPost: (newPostBody) => {
      dispatch(addPostActionCreator(newPostBody))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
