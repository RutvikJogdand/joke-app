import React, { useState } from "react";
import JokeDisplay from "../JokeDisplay/JokeDisplay";
import styles from  "./Buttons.module.css"
import axios from 'axios'
// require('dotenv').config()

function Buttons(){

    const jokeTopicArr = ["Any","Programming","Miscellaneous","Dark","Pun","Spooky","Christmas"]

    const [setUp, setSetUp] = useState('')
    const [line, setLine] = useState('')
    const [joketype, setType] = useState('')
    const [jokeChange, setJokeChange] = useState(false)

    const handleBtnClick = (jokeTopic) => {

        console.log(`${process.env.REACT_APP_JOKE}/${jokeTopic}`)
        axios.get(`${process.env.REACT_APP_JOKE}/${jokeTopic}`)
        .then(res => {
            console.log(res)
            setJokeChange(true)
            setType(res.data.type)
            setSetUp(res.data.setup)
            setLine(res.data.delivery || res.data.joke)
        })
        .catch(err => {
            console.log(err)
        })

        console.log(jokeTopic)
    }
    return(
        <div className={styles.gridContainer}>
            <div className={`${styles.elemOne} ${styles.jokeDisplayBox}`}>
                <JokeDisplay jokeChange={jokeChange} joketype={joketype} setup={setUp} line={line}/>
            </div>
            <div className={`${styles.btnContainer} ${styles.elemTwo}`}>
                {
                    jokeTopicArr.map(item => {

                        return(
                            <div className={styles.buttons} onClick={()=>handleBtnClick(item) }> {item} </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Buttons