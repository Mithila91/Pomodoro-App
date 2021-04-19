import React from 'react';
import Pomodoro from './pomodoro';
import Toggle from './toggle'
import blob from '../blobs/blobOne.svg';
import blobTwo from '../blobs/blobTwo.svg';



export default function App() {

    return (
        <main>
            <div className="container">
                <img className="blobOne" src={blob} alt="blolbs"></img>
                <h2>Pomodoro</h2>
                <Pomodoro />
                <Toggle />

                <img className="blobTwo" src={blobTwo} alt="blolbs"></img>
            </div>
        </main>
    )
}