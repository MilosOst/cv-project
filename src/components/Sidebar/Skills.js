import { Component } from "react";
import uniqid from 'uniqid';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: [
                {name: "Javascript", id: uniqid()},
                {name: "Python", id: uniqid()},
                {name: "React.JS", id: uniqid()},
            ],
            skill: {name: "", id: uniqid()},
            hover: false,
            edit: false,
        };
    }

    toggleForm = () => {
        this.setState(prevState => ({
            edit: !prevState.edit,
            hover: !prevState.hover,
        }));
    }

    handleMouseIn = () => {
        this.setState({hover: true});
    }

    handleMouseOut = () => {
        this.setState({hover: false});
    }

    handleChange = (e) => {
        this.setState({
            skill: {
                name: e.target.value,
                id: uniqid(),
            }
        });
    }

    removeSkill = (skillId) => {
        const updatedSkills = this.state.skills.filter(skill => skill.id !== skillId);

        this.setState({
            skills: updatedSkills,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.skill.name) {
            this.setState({
                skills: this.state.skills.concat(this.state.skill),
                skill: {name: "", id: uniqid()},
                hover: false,
                edit: false,
            });
        }
    }

    render() {
        const { skills, currSkill, hover, edit } = this.state;

        return (
            <div className="section" onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>
                <h4 className="section-title">SKILLS</h4>
                <ul className="section-info">
                    {skills.map((skill) => {
                        return <li key={skill.id}
                        className="removable"
                        onClick={() => this.removeSkill(skill.id)}
                        >{skill.name}</li>
                    })}
                </ul>
                {hover && <button className="btn" onClick={this.toggleForm}>ADD</button>}

                {edit &&
                <form action="" className="edit-form" onSubmit={this.handleSubmit}>
                    <div className="form-entry">
                        <label htmlFor="skill" className="form-label">Skill</label>
                        <input type="text" id="skill" onChange={this.handleChange}/>
                    </div>
                    <div className="btn-section">
                        <button className="close-btn" onClick={this.toggleForm}>Close</button>
                        <button className="close-btn" type="submit">Add Skill</button>
                    </div>
                </form>
                }
            </div>
        );
    }
}

export default Skills;