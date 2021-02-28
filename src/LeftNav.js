import React from 'react';
import {NavLink} from 'react-router-dom';

const LeftNav = () => {
    return (
        <div className="left-nav-container">
            <div className="icons">
                <div className="icons-bis">
                    <NavLink to='/' exact activeClassName="active-left-nav">
                        <img src="./img/icons/home.svg" alt="menu"/>
                    </NavLink>
                    <br/>
                    <NavLink to='/detail' exact activeClassName="active-left-nav">
                        <img src="./img/icons/rocket.svg" alt="detail"/>
                    </NavLink>
                    <br/>
                    <NavLink to='/sumup' exact activeClassName="active-left-nav">
                        <img src="./img/icons/rocket.svg" alt="sumup"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default LeftNav
