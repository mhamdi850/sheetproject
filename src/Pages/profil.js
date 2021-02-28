import React, { useContext } from 'react';
import Logs from '../Components/Logs';
import {UidContext} from '../Components/AppContext';
import UpdateProfil from '../Components/Profil/UpdateProfil';
import Navbar from '../Components/Navigation/Navbar';
import NavLog from '../Components/NavLog';

const Profil = () => {
    const uid = useContext(UidContext)

    return (
        <div className="profil-page">
            <Navbar/>
            <br/>
            <NavLog/>
            
            {uid ? (
                <UpdateProfil/>
            ) : (
            <div className="log-container">
                <Logs
                    signin={false}
                    signup={true}
                />
            </div>
            )}
        
          
        </div>
            

    )
}

export default Profil
