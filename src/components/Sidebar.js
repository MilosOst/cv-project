import React from "react";
import Contact from "./Sidebar/Contact.js";
import Education from "./Sidebar/Education.js";
import Skills from "./Sidebar/Skills.js";


function Sidebar() {
    return (
        <aside className="sidebar">
            <Contact />
            <Education />
            <Skills />
        </aside>
    );
}

export default Sidebar;