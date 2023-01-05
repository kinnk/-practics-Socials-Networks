import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import state from './redux/state.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
    userProfile = {state.ProfilePage.UserProfile}
    posts = {state.ProfilePage.Posts}
    dialogs = {state.MessagesPage.Dialogs}
    messages = {state.MessagesPage.Messages}
    />
  </React.StrictMode>
);

