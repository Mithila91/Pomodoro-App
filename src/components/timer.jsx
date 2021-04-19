import React from 'react';
import { useState, useEffect } from 'react';


import pauseIcon from '../blobs/pause.svg';
import playIcon from '../blobs/play.svg';
import reset from '../blobs/reset.svg';

export default function Timer() {

    const [seconds, setSeconds] = useState(25 * 60);
    const [paused, setPaused] = useState(true);
    const [displayMessage, setDisplayMessage] = useState(true);

    useEffect(() => {
        const int = setInterval(() => {
            console.log(`${Date.now()} - paused: ${paused}`);
            if (!paused) {
                setSeconds((s) => s - 1);
            }
        }, 1000);
        return () => {
            clearInterval(int);
        };
    }, [paused]);

    function startTimer() {
        setPaused(false);
        setDisplayMessage(true)

    }
    function pauseTimer() {
        setPaused(true);
        setDisplayMessage(false)
    }
    function resetTimer() {

        setPaused(true);
        setSeconds(25 * 60);
        setDisplayMessage(true)
    }

    return (
        <>

            {displayMessage ? <h3> Time to work</h3> : <h3>Break Time</h3>}
            <h1 className="time">
                {`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}
            </h1>
            <div className="btn">

                <button onClick={paused ? startTimer : pauseTimer}>
                    {paused ? <img src={playIcon} alt="play icon"></img> : <img src={pauseIcon} alt="pause icon"></img>}
                </button>
                <button onClick={resetTimer}><img src={reset} alt="reset icon"></img></button>
            </div>

        </>
    );
}
