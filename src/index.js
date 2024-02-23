import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';


const root = createRoot(document.getElementById('app'));

root.render(
<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
