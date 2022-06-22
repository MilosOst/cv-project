import { Component } from "react";
import uniqid from 'uniqid';

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            experience: [
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
            ],
            title: "",
            company: "",
            description: "",
            start: "",
            end: "",
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

    toggleForm = () => {
        this.setState(prevState => ({
            edit: !prevState.edit,
            hover: !prevState.hover,
        }));
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    handleCompanyChange = (e) => {
        this.setState({
            company: e.target.value,
        });
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value,
        });
    }
    
    handleStartChange = (e) => {
        this.setState({
            start: e.target.value,
        });
    }

    handleEndChange = (e) => {
        this.setState({
            end: e.target.value,
        });
    }

    removeExperience = (experienceID) => {
        const updatedExperience = this.state.experience.filter(entry => entry.id !== experienceID);

        this.setState({
            experience: updatedExperience,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            experience: this.state.experience.concat({
                title: this.state.title,
                company: this.state.company,
                description: this.state.description,
                start: this.state.start,
                end: this.state.end,
                id: this.state.id,
            }),
            title: "",
            company: "",
            description: "",
            start: "",
            end: "",
            id: uniqid(),
            hover: false,
            edit: false,
        })
    }

    render() {
        const { experience, hover, edit } = this.state;

        return (
            <div className="section" onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>
                <h4 className="section-title">Experience</h4>
                <ul className="section-info">
                    {experience.map((position) => {
                        return (
                            <li key={position.id}
                            className="experience-item removable" 
                            onClick={() => this.removeExperience(position.id)}>
                                <h5 className="position-title">{position.title}</h5>
                                <h6 className="company-info">{position.company} / {position.start} - {position.end}</h6>
                                <p>{position.description}</p>
                            </li>
                        );
                    })}
                </ul>
                {hover && <button className="btn" onClick={this.toggleForm}>ADD</button>}

                {edit &&
                <form action="" className="edit-form" onSubmit={this.handleSubmit}>
                    <div className="form-entry">
                        <label htmlFor="title" className="form-label">Position</label>
                        <input type="text" id="title" onChange={this.handleTitleChange}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="company" className="form-label">Company</label>
                        <input type="text" id="company" onChange={this.handleCompanyChange}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea id="description" onChange={this.handleDescriptionChange}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="job-start" className="form-label">Start Date</label>
                        <input type="text" id="job-start" placeholder="MM/YY" onChange={this.handleStartChange}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="job-end" className="form-label">End Date</label>
                        <input type="text" id="job-end" placeholder="MM/YY" onChange={this.handleEndChange}/>
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


export default Experience;