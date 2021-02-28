import React from 'react';
import {useSelector} from "react-redux";
import UploadFile from './UploadFile';

const UpdateProfil = () => {
    const userData = useSelector((state) => state.userReducer)
    return (
        <div className="profil-container">
            <h1>Profil de {userData.pseudo}</h1>
            <UploadFile/>
        </div>
    )
}

export default UpdateProfil

