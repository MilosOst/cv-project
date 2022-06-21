import { Component } from "react";
import uniqid from 'uniqid';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: [
                {name: 'Javascript', id: uniqid()},
                {name: 'Python', id: uniqid()},
                {name: 'React.JS', id: uniqid()},
            ],
        }
    }

    render() {
        const skills = this.state.skills;

        return (
            <div className="sidebar-section">
                <h4 className="section-title">SKILLS</h4>
                <ul className="section-info">
                    {skills.map((skill) => {
                        return <li key={skill.id}>{skill.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills;