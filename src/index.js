import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state, {subscribe} from "./redux/state";
import {addPost, updateNewPostText} from "./redux/state";

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

