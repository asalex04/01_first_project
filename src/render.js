import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {addPost} from "./redux/state";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App props={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


