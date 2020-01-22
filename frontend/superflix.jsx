import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TODO: just for testing
// import { addToList, deleteFromList } from './actions/list_video_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: { users: { [window.currentUser.id]: window.currentUser }},
      session: { currentUserId: window.currentUser.id }
    };

    store = configureStore(preloadedState);

    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TODO: just for testing
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.addToList = addToList;
  // window.deleteFromList = deleteFromList;

  ReactDOM.render(<Root store={store} />, root);
});