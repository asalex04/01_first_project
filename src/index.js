import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from "./redux/redux_store";
import StoreContext from "./StoreContext";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
          <StoreContext.Provider value={store}>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
          </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

