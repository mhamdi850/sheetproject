import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {UidContext} from "./AppContext";
import Logout from './Logs/Logout';
import { useSelector } from 'react-redux';

const NavLog = () => {
    const uid = useContext(UidContext)
    const userData = useSelector((state) => state.userReducer)

    
    return (
        <nav>
            
            {uid ? (
                <ul>
                    <li>
                        <NavLink exact to="/profil">
                            <h5>Welcome {userData.pseudo}</h5>
                        </NavLink>
                    </li>
                    <Logout />
                </ul>
            ) : (
                <div>
                     <NavLink exact to="/profil">
                            <h2>Login</h2>
                    </NavLink>
                </div>
            )}
        </nav>
    )
}

export default NavLog
