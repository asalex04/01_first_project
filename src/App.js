import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {addPost} from "./redux/state";

const App = (props) => {
  const { dialogs, posts } = props.props.profilePage;
  const { messages } = props.props.messagesPage;
  return (
    <Router>
       <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
               render={ (props) => <Dialogs messages={messages} dialogs={dialogs} />}
        />
        <Route path='/profile'
               render={ (props) => <Profile posts={posts} addPost={props.addPost}/>}
        />
      </div>
    </div>
    </Router>
   
  );
}

export default App;
