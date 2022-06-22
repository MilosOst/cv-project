import { Component } from "react";
import uniqid from 'uniqid';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationList: [
                {
                    degree: "Bachelor's of Science",
                    program: "Business Management",
                    school: "Harvard University",
                    startDate: "09/2012",
                    endDate: "05/2016",
                    id: uniqid(),
                },
            ],
            degree: "",
            program: "",
            school: "",
            startDate: "",
            endDate: "",
            id: uniqid(),
            hover: false,
            edit: false,
        };
    }

    handleMouseIn = () => {
        this.setState({hover: true});
    }

    handleMouseOut = () => {
        this.setState({hover: false});
    }

    removeEntry = (entryID) => {
        const updatedList = this.state.educationList.filter(entry => entry.id !== entryID);
        this.setState({
            educationList: updatedList,
        });
    }

    toggleForm = () => {
        this.setState(prevState => ({
            edit: !prevState.edit,
            hover: !prevState.hover,
        }));
    }

    handleDegreeChange = (e) => {
        this.setState({
            degree: e.target.value
        });
    }

    handleProgramChange = (e) => {
        this.setState({
            program: e.target.value,
        });
    }

    handleSchoolChange = (e) => {
        this.setState({
            school: e.target.value,
        });
    }

    handleStartChange = (e) => {
        this.setState({
            startDate: e.target.value,
        });
    }

    handleEndChange = (e) => {
        this.setState({
            endDate: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            educationList: this.state.educationList.concat({
                degree: this.state.degree,
                program: this.state.program,
                school: this.state.school,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                id: this.state.id,
            }),
            degree: "",
            program: "",
            school: "",
            startDate: "",
            endDate: "",
            id: uniqid(),
            hover: false,
            edit: false,
        }); 
    }

    render() {
        const { educationList, education, hover, edit } = this.state;

        return (
            <div className="section" onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>
                <h4 className="section-title">EDUCATION</h4>
                <ul className="section-info">
                    {educationList.map((entry) => {
                        return (
                            <li key={entry.id} className="removable" onClick={() => this.removeEntry(entry.id)}>
                                <h4>{entry.degree}</h4>
                                <p>{entry.program}</p>
                                <p>{entry.school}</p>
                                <p>{entry.startDate} - {entry.endDate}</p>
                            </li>
                        );
                    })}
                </ul>
                {hover && <button className="btn" onClick={this.toggleForm}>ADD</button>}

                {edit &&
                <form action="" className="edit-form" id="education-form" onSubmit={this.handleSubmit}>
                    <div className="form-entry">
                        <label htmlFor="degree" className="form-label">Degree</label>
                        <input type="text" id="degree" onChange={this.handleDegreeChange}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="program" className="form-label">Program</label>
                        <input type="text" id="program" onChange={this.handleProgramChange}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="school" className="form-label">School</label>
                        <input type="text" id="school" onChange={this.handleSchoolChange}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="start-date" className="form-label">Start Date</label>
                        <input type="text" id="start-date" placeholder="MM/YY" onChange={this.handleStartChange}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="end-date" className="form-label">End Date</label>
                        <input type="text" id="end-date" placeholder="MM/YY" onChange={this.handleEndChange}/>
                    </div>
                    <div className="btn-section">
                        <button className="close-btn" onClick={this.toggleForm}>Close</button>
                        <button className="close-btn" type="submit">Add</button>
                    </div>
                </form>
                }
            </div>
        );
    }
}

export default Education;