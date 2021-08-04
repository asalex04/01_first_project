import React, {Suspense} from 'react';
import './App.css'
import NavBar from './components/Navbar/NavBar';
import {HashRouter, Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {logout} from "./redux/auth_reducer";
import {initializeApp} from "./redux/app_reduser";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux_store";
import Switch from "react-bootstrap/Switch";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainerF'));


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
          <Suspense fallback={<Preloader />}>
            <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/dialogs' component={DialogsContainer}/>
              <Route path='/profile/:userId?' component={ProfileContainer}/>
            </Switch>
          </Suspense>
          <Route path='/users' component={UsersContainer}/>
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
  return <HashRouter >
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default MainApp
