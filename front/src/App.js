import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';

const App = () => {
    return (
        <>
            <Header />
            <Route exact path="/" component={Landing} />
        </>
    );
};

export default App;
