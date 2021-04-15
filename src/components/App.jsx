import React from 'react';
import blob from '../blobs/blobOne.svg';
import blobTwo from '../blobs/blobTwo.svg';
import Pomodoro from './pomodoro';


export default function App() {

    return (
        <main>
            <div className="container">
                <img className="blobOne" src={blob} alt="blolbs"></img>
                <h2>Pomodoro</h2>
                <Pomodoro />
                <img className="blobTwo" src={blobTwo} alt="blolbs"></img>
            </div>
        </main>
    )
}

