import React, { useState } from "react";
import JokeDisplay from "../JokeDisplay/JokeDisplay";
import styles from  "./Buttons.module.css"
import axios from 'axios'
// require('dotenv').config()

function Buttons(){

    const [clearOldLine, setClearOldLine] = useState(false)

    const jokeTopicArr = [
        {
            jokeType: "Any",
            btnIcon:"fa-solid fa-shuffle"
        }
        ,
        {
            jokeType: "Programming",
            btnIcon: "fas fa-code"
        },
        {
            jokeType: "Dark",
            btnIcon: "fa-solid fa-skull"
        },
        {
            jokeType: "Spooky",
            btnIcon: "fa-solid fa-ghost"
        },
        ]

    const [setUp, setSetUp] = useState('')
    const [line, setLine] = useState('')
    const [loading, setLoading] = useState(0)
    const [joketype, setType] = useState('')
    const [jokeChange, setJokeChange] = useState(false)

    const handleBtnClick = (jokeTopic) => {

        setLoading(1)
        console.log(`${process.env.REACT_APP_JOKE}/${jokeTopic}`)
        axios.get(`${process.env.REACT_APP_JOKE}/${jokeTopic}`)
        .then(res => {
            console.log(res)
            console.log(setLoading(2))
            setJokeChange(true)
            setType(res.data.type)
            setSetUp(res.data.setup)
            setLine(res.data.delivery || res.data.joke)
            setClearOldLine(true)
        })
        .catch(err => {
            console.log(err)
            setLoading(3)
        })

        console.log(jokeTopic)
    }
    return(
        <div className={styles.gridContainer}>
            <div className={`${styles.elemOne} ${styles.jokeDisplayBox}`}>
                {
                    loading === 1?
                    'loading'
                    :
                    <JokeDisplay clearOldLine={clearOldLine} setClearOldLine={setClearOldLine} jokeChange={jokeChange} joketype={joketype} setup={setUp} line={line}/>
                }
            </div>
            <div className={`${styles.btnContainer} ${styles.elemTwo}`}>
                {
                    jokeTopicArr.map(item => {

                        return(
                            <button className={`${styles.buttons} rounded-pill`} onClick={()=>handleBtnClick(item.jokeType) }> <i className={item.btnIcon}></i> </button>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Buttons