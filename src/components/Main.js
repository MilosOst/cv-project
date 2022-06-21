import { Component } from "react";
import Profile from "./Main/Profile.js";
import Experience from "./Main/Experience.js";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-wrapper">
                <div className="main-content">
                    <Profile />
                    <Experience />
                </div>
            </div>
        );
    }
}

export default Main;