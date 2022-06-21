import React, { Component } from "react";
import Contact from "./SIdebar/Contact.js";
import Education from "./SIdebar/Education.js";
import Skills from "./SIdebar/Skills.js";

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