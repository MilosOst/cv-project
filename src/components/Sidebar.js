import React, { Component } from "react";
import Contact from "./Sidebar/Contact.js";
import Education from "./Sidebar/Education.js";
import Skills from "./Sidebar/Skills.js";

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="sidebar">
                <Contact />
                <Education />
                <Skills />
            </aside>
        )
    };
}

export default Sidebar;