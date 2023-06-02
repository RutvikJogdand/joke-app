import React from "react"
import axios from "axios"
import Buttons from "../Buttons/Buttons"
import './JokeDashboard.css'
// require('dotenv').config()

function JokeDashboard(){

    return(
        <div className='main-container'>
            <Buttons/>
        </div>
    )

}

export default JokeDashboard