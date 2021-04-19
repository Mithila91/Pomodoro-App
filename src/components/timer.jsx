
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

    }
    function pauseTimer() {
        setPaused(true);
    }
    function resetTimer() {

        setPaused(true);
        setSeconds(25 * 60);
    }

    return (
        <>

            <h3> Time to work</h3>
            <h1 className="time">
                {`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}
            </h1>
            <div className="btn">

                <button onClick={paused ? startTimer : pauseTimer}>
                    {paused ? <img src={playIcon} alt="Play"></img> : <img src={pauseIcon} alt="pause"></img>}
                </button>
                <button onClick={resetTimer}><img src={reset}></img></button>
            </div>

        </>
    );
}