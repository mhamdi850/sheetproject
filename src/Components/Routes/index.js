import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import home from '../../Pages/home';
import detail from '../../Pages/detail';
import sumUp from '../../Pages/sumUp';
import profil from '../../Pages/profil';
//import NavLog from '../NavLog';
// import Navbar from '../Navbar';

function index() {
    return (

        <Router>
            <Switch>
                <Route path="/" exact component={home} />
                <Route path="/profil" exact component={profil} />
                <Route path="/detail" exact component={detail} />
                <Route path="/sumUp" exact component={sumUp} />
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

export default index
