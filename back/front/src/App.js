import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Landing from './components/Landing';
import SurveyNew from './components/SurveyNew';

const App = () => {
    return (
        <>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
        </>
    );
};

export default App;
