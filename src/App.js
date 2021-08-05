import React, {Suspense, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css'
import NavBar from './components/Navbar/NavBar';
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'
import {connect, Provider} from "react-redux";
import {logout} from "./redux/auth_reducer";
import {initializeApp} from "./redux/app_reduser";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux_store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));

const App = (props) => {
  const catchAllUnhandledErrors = (reason, promise) => {
    alert('Some error occurred')
  }
  useEffect(() => {
    props.initializeApp()
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors)
    return () => {
      window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
    }
  })

    if (!props.initialized) {
      return <Preloader/>
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <NavBar/>
        <div className='app-wrapper-content'>
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route path='/users' component={UsersContainer}/>
            <Route path='/profile/:userId?' component={ProfileContainer}/>
            <Suspense fallback={<Preloader/>}>
              <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/dialogs' component={DialogsContainer}/>
                <Route path='*' component={NotFound}/>
              </Switch>
            </Suspense>
          </Switch>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  connect(mapStateToProps, {initializeApp, logout}))(App);

const MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
}

export default MainApp
