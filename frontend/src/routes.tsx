import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Formik from './pages/Formik';
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/new" component={Form}></Route>
                <Route path="/formik" component={Formik}></Route>
            </Switch>
        </BrowserRouter>
    );
}