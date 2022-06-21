import { Component } from "react";
import uniqid from 'uniqid';

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            experience: [
                {
                    title: 'POSITION TITLE HERE',
                    company: 'COMPANY NAME',
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat a id delectus vel maxime temporibus odio explicabo",
                    start: '2012',
                    end: '2013',
                    id: uniqid(),
                },
                {
                    title: 'POSITION TITLE HERE',
                    company: 'COMPANY NAME',
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat a id delectus vel maxime temporibus odio explicabo",
                    start: '2012',
                    end: '2013',
                    id: uniqid(),
                },
                {
                    title: 'POSITION TITLE HERE',
                    company: 'COMPANY NAME',
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat a id delectus vel maxime temporibus odio explicabo",
                    start: '2012',
                    end: '2013',
                    id: uniqid(),
                },
                
            ],
        };
    }

    render() {
        const experience = this.state.experience;

        return (
            <div>
                <h4 className="section-title">Experience</h4>
                <ul className="section-info">
                    {experience.map((position) => {
                        return (
                            <li key={position.id} className="experience-item">
                                <h5 className="position-title">{position.title}</h5>
                                <h6 className="company-info">{position.company} / {position.start} - {position.end}</h6>
                                <p>{position.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}


export default Experience;