import React from 'react';
import Toggle from './toggle'
import blob from '../blobs/blobOne.svg';
import blobTwo from '../blobs/blobTwo.svg';
import Timer from '../components/timer'
//import Break from './break';


const App = () => {

    return (

        <div className="container">

            <img className="blob" src={blob} alt="blolbs"></img>
            <h2>Pomodoro</h2>

            <Timer />
            <Toggle />


            <img className="blob-two" src={blobTwo} alt="blolbs"></img>

        </div>

    )
}
export default App;