import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { addMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addMessage={addMessage} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}