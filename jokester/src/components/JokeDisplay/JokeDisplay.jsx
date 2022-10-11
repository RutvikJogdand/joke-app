import React, { useState } from "react";
import styles from './JokeDisplay.module.css'

function JokeDisplay(props){

    const [userLine, setUserLine] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [originalLine, setOriginalLine] = useState(false)

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const displayOriginalLine = () => {
        if(props.jokeChange === true){
            setOriginalLine(true)
            setUserLine('')
            setInputValue('')
        }
        setOriginalLine(!originalLine)
    }

    const handleUserLine = () => {
        setUserLine(inputValue)
    }
    return(
        <div className={styles.jokeDisplayContainer}>
            <div className={styles.headerFont}> {props.setup} </div>
            <br/>
            {
                props.joketype === "single" &&
                props.line
            }
            {userLine && originalLine === false?
            userLine
            :
            originalLine === false && props.joketype === 'twopart' ?
            '_______'
            :
            originalLine &&
            props.line
            }
            {
                originalLine === false && props.joketype === 'twopart' &&
                <>
                <br/>
                <input type='text' name='userLine' value={inputValue} onChange={(event) => handleChange(event)} />
                <button onClick={handleUserLine}>Submit</button>
                </>
            }
            {
                props.joketype !== 'single' &&
            <button onClick={displayOriginalLine}> {originalLine === true ? 'Hide original Punchline' : ' View Original Punchline'}</button>
            }
        </div>
    )

}

export default JokeDisplay