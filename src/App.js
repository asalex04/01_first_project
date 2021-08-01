import React from 'react';
import './App.css'
import NavBar from './components/Navbar/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {logout} from "./redux/auth_reducer";
import {initializeApp} from "./redux/app_reduser";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux_store";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <NavBar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
                 render={() => <DialogsContainer/>}/>
          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer/>}/>
          <Route path='/users'
                 render={() => <UsersContainer/>}/>
          <Route path='/login'
                 render={() => <Login/>}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const  AppContainer = compose(
  connect(mapStateToProps, {initializeApp, logout}))(App);

const MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp
