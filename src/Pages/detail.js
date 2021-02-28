import React from 'react'
import AchievChart from '../Components/Charts/AchievChart'
import Country from '../Components/Datas/Country'
import Navbar from '../Components/Navigation/Navbar'


function Detail() {
    return (
        <div>
            <Navbar/>
            <Country/>
            <AchievChart/>
        </div>
    )
}

export default Detail
