import { useState } from "react";
import uniqid from 'uniqid';


function Skills() {
    const [skills, setSkills] = useState([
        {name: "Javascript", id: uniqid()},
        {name: "Python", id: uniqid()},
        {name: "React.JS", id: uniqid()},
    ]);

    const [skill, setSkill] = useState({
        name: "",
        id: uniqid(),
    });

    const [hover, setHover] = useState(false);
    const [edit, setEdit] = useState(false);

    const toggleForm = (e) => {
        setHover(!hover);
        setEdit(!edit);
    };

    const removeSkill = (skillId) => {
        const updatedSkills = skills.filter(entry => entry.id !== skillId);
        setSkills(updatedSkills);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Only add skill if field was filled in
        if (skill.name) {
            setSkills(skills.concat(skill));
            setSkill({name: "", id: uniqid()});
        }
        toggleForm();
    };
    


    return (
        <div className="section" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <h4 className="section-title">SKILLS</h4>
            <ul className="section-info">
                {skills.map((skill) => {
                    return <li key={skill.id}
                    className="removable"
                    onClick={() => removeSkill(skill.id)}>
                    {skill.name}</li>
                })}
            </ul>
            {hover && <button className="btn" onClick={toggleForm}>ADD</button>}

            {edit &&
            <form action="" className="edit-form" onSubmit={handleSubmit}>
                <div className="form-entry">
                    <label htmlFor="skill" className="form-label">Skill</label>
                    <input type="text" id="skill" onChange={(e) => {
                        setSkill({name: e.target.value, id: uniqid()});
                    }}/>
                </div>
                <div className="btn-section">
                    <button className="close-btn" onClick={toggleForm}>Close</button>
                    <button className="close-btn" type="submit">Add Skill</button>
                </div>
            </form>
            }
        </div>
    );
}

export default Skills;