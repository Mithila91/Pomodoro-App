import React from "react";
import { useState } from "react";

import exit from "../blobs/exit.svg";

export default function Toggle() {
    const [onToggle, setOnToggle] = useState(false);

    function handleClick() {
        setOnToggle((onToggle) => !onToggle);

        //If timer is on, display this component,
        //if not on display pause component,
        //Create the pause countdown to show and toggle between
        // {onToggle ? "HELLO" : "TOGGLE "}
    }

    return (
        <div>

            <button className="exit" onClick={handleClick}>
                <img src={exit} alt="exit icon"></img>
            </button>
        </div>
    );
}
