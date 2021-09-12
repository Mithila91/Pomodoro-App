import React from 'react';
import { useState, useEffect } from "react";


import pauseIcon from '../blobs/pause.svg';
import playIcon from '../blobs/play.svg';
import reset from '../blobs/reset.svg';

const Break = () => {
    const [seconds, setSeconds] = useState(5 * 60);
    const [paused, setPaused] = useState(true);

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

    const startTimer = () => {
        setPaused(false);
    }
    const pauseTimer = () => {
        setPaused(true);
    }
    const resetTimer = () => {
        setPaused(true);
        setSeconds(5 * 60);
    }

    return (
        <div className="App">
            <>
                <h1 className="time">
                    {`0${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}
                </h1>
                <div className="btn">

                    <button onClick={paused ? startTimer : pauseTimer}>
                        {paused ? <img src={playIcon}></img> : <img src={pauseIcon}></img>}
                    </button>
                    <button onClick={resetTimer}><img src={reset}></img></button>
                </div>
            </>
        </div>
    );
}

export default Break;