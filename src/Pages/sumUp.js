import React from 'react';
import Navbar from '../Components/Navigation/Navbar';
import Data from '../Components/Datas/Data';
import './Paint.css';

const sumUp = () => {
    return (
        <div>
         <Navbar/>

         <div className="data-summary">
             <div className="box">
                <Data/>
             </div>
        </div>

        <div className="data-summary">
             <div className="box">
                <Data/>
             </div>
        </div>

    </div>
    )
}

export default sumUp
