import { useState } from "react";
import uniqid from 'uniqid';


function Experience() {
    const [experience, setExperience] = useState([
        {
            title: "POSITION TITLE HERE",
            company: "COMPANY NAME",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat a id delectus vel maxime temporibus odio explicabo",
            start: "2012",
            end: "2013",
            id: uniqid(),
        },
        {
            title: "POSITION TITLE HERE",
            company: "COMPANY NAME",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat a id delectus vel maxime temporibus odio explicabo",
            start: "2012",
            end: "2013",
            id: uniqid(),
        },
    ]);

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDesciption] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [id, setId] = useState(uniqid());
    const [hover, setHover] = useState(false);
    const [edit, setEdit] = useState(false);
    
    const toggleForm = (e) => {
        setHover(!hover);
        setEdit(!edit);
    };

    const removeExperience = (experienceID) => {
        const updatedExperience = experience.filter(entry => entry.id !== experienceID);
        setExperience(updatedExperience);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setExperience(experience.concat({ title, company, description, start, end, id }));

        setTitle("");
        setCompany("");
        setDesciption("");
        setStart("");
        setEnd("");
        setId(uniqid());
        toggleForm();
    };

    return (
        <div className="section" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <h4 className="section-title">Experience</h4>
            <ul className="section-info">
                {experience.map((position) => {
                    return (
                        <li key={position.id}
                        className="experience-item removable" 
                        onClick={() => removeExperience(position.id)}>
                            <h5 className="position-title">{position.title}</h5>
                            <h6 className="company-info">{position.company} / {position.start} - {position.end}</h6>
                            <p>{position.description}</p>
                        </li>
                    );
                })}
            </ul>
            {hover && <button className="btn" onClick={toggleForm}>ADD</button>}

            {edit &&
            <form action="" className="edit-form" onSubmit={handleSubmit}>
                <div className="form-entry">
                    <label htmlFor="title" className="form-label">Position</label>
                    <input type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-entry">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input type="text" id="company" onChange={(e) => setCompany(e.target.value)}/>
                </div>
                <div className="form-entry">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea id="description" onChange={(e) => setDesciption(e.target.value)}/>
                </div>
                <div className="form-entry">
                    <label htmlFor="job-start" className="form-label">Start Date</label>
                    <input type="text" id="job-start" placeholder="MM/YY" onChange={(e) => setStart(e.target.value)}/>
                </div>
                <div className="form-entry">
                    <label htmlFor="job-end" className="form-label">End Date</label>
                    <input type="text" id="job-end" placeholder="MM/YY" onChange={(e) => setEnd(e.target.value)}/>
                </div>
                <div className="btn-section">
                    <button className="close-btn" onClick={toggleForm}>Close</button>
                    <button className="close-btn" type="submit">Add</button>
                </div>
            </form>
            }
        </div>
    );
}


export default Experience;