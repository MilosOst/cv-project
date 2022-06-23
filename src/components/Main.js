import React from "react";
import Profile from "./Main/Profile.js";
import Experience from "./Main/Experience.js";


function Main() {
    return (
        <div className="main-wrapper">
            <div className="main-content">
                <Profile />
                <Experience />
            </div>
        </div>
    );
}

export default Main;