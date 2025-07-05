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
            // setUserLine('')
            setInputValue('')
        }
        setOriginalLine(!originalLine)
    }

    const handleUserLine = () => {
        setUserLine(inputValue)
    }
    const [alertVisible, setAlertVisible] = useState(false);

    const copyToClipboard = () => {
        let textToCopy = props.setup;
        if (props.joketype === 'twopart') {
            if (originalLine || userLine) {
            textToCopy += ` ${originalLine ? props.line : userLine}`;
            } else {
            textToCopy += ' _______';
            }
        } else if (props.joketype === 'single') {
            textToCopy = props.line;
        }

        navigator.clipboard.writeText(textToCopy).then(() => {
            setAlertVisible(true);
            setTimeout(() => setAlertVisible(false), 3000); // Hide alert after 3 seconds
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    return(
        <div id='main-joke-container' className={styles.jokeDisplayContainer}>
            <div className={styles.headerFont}> {props.setup} </div>
            <br/>
            {
                props.line === '' && props.joketype === '' ?
                <p>Click on the button precious</p>
                :
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
                <div className={`${styles.inputField} ${inputValue ? '' : styles.empty}`}>
                    <input  type='text' name='userLine' value={inputValue} onChange={(event) => handleChange(event)} />
                </div>
                <br/>
                <button className={ `${styles.btnMain} ${styles.submitbtn} btn btn-dark me-2` } onClick={handleUserLine}>Submit</button>
                </>
            }
            {
                props.joketype !== 'single' && props.joketype !== '' &&
                <>
                    {
                        originalLine&&
                        <br/>
                    }
                    <button className={ `${styles.btnMain} ${styles.punchlineViewHideBtn} btn btn-dark` } onClick={displayOriginalLine}> {originalLine === true ? 'Hide original Punchline' : ' View Original Punchline'}</button>
                </>
            }
            {alertVisible && (
                <small style={{position:'fixed', top:'10px', left:'50%', transform:'translateX(-50%)'}} className="alert alert-success" role="alert">
                    Joke copied to clipboard!
                </small>
            )}
            {
                props.joketype &&
                <>
                &nbsp;<button className={ `${styles.btnMain} ${styles.copyBtn} btn btn-dark` } onClick={copyToClipboard} title="Copy your joke to clipboard! Click me"><i className="fa fa-copy"></i> </button>
                </>
            }
        </div>
    )
}

export default JokeDisplay