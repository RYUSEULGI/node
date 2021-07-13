import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reducers from './reducers';

import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// const store = createStore(reducers, {}, applyMiddleware);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
