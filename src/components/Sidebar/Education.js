import { useState } from "react";
import uniqid from 'uniqid';


function Education() {
    const [educationList, setEducationList] = useState([
        {
            degree: "Bachelor's of Science",
            program: "Business Management",
            school: "Harvard University",
            start: "09/2012",
            end: "05/2016",
            id: uniqid(),
        },
    ]);
    
    const [degree, setDegree] = useState("");
    const [program, setProgram] = useState("");
    const [school, setSchool] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [id, setId] = useState(uniqid());
    const [hover, setHover] = useState(false);
    const [edit, setEdit] = useState(false);

    const toggleForm = (e) => {
        setHover(!hover);
        setEdit(!edit);
    };

    const removeEntry = (entryID) => {
        const updatedList = educationList.filter(entry => entry.id !== entryID);
        setEducationList(updatedList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEducationList(educationList.concat({ degree, program, school, start, end, id }));

        setDegree("");
        setProgram("");
        setSchool("");
        setStart("");
        setEnd("");
        setId(uniqid());
        toggleForm();
    }

    return (
        <div className="section" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <h4 className="section-title">EDUCATION</h4>
            <ul className="section-info">
                {educationList.map((entry) => {
                    return (
                        <li key={entry.id} className="removable" onClick={() => removeEntry(entry.id)}>
                            <h4>{entry.degree}</h4>
                            <p>{entry.program}</p>
                            <p>{entry.school}</p>
                            <p>{entry.start} - {entry.end}</p>
                        </li>
                    );
                })}
            </ul>
            {hover && <button className="btn" onClick={toggleForm}>ADD</button>}

            {edit &&
            <form action="" className="edit-form" id="education-form" onSubmit={handleSubmit}>
                <div className="form-entry">
                    <label htmlFor="degree" className="form-label">Degree</label>
                    <input type="text" id="degree" onChange={(e) => setDegree(e.target.value)}/>
                </div>
                <div className="form-entry">
                    <label htmlFor="program" className="form-label">Program</label>
                    <input type="text" id="program" onChange={(e) => setProgram(e.target.value)}/>
                </div>
                <div className="form-entry">
                    <label htmlFor="school" className="form-label">School</label>
                    <input type="text" id="school" onChange={(e) => setSchool(e.target.value)}/>
                </div>
                <div className="form-entry">
                    <label htmlFor="start-date" className="form-label">Start Date</label>
                    <input type="text" id="start-date" placeholder="MM/YY" onChange={(e) => setStart(e.target.value)}/>
                </div>
                <div className="form-entry">
                    <label htmlFor="end-date" className="form-label">End Date</label>
                    <input type="text" id="end-date" placeholder="MM/YY" onChange={(e) => setEnd(e.target.value)}/>
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

export default Education;