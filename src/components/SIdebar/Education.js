import { Component } from "react";
import uniqid from 'uniqid';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            educationList: [
                {
                    degree: "Bachelor's of Science",
                    program: 'Business Management',
                    school: 'Harvard University',
                    startDate: '2012',
                    endDate: '2016',
                    id: uniqid(),
                },
            ],
        };
    }

    render() {
        const { educationList } = this.state;

        return (
            <div className="sidebar-section">
                <h4 className="section-title">EDUCATION</h4>
                <ul className="section-info">
                    {educationList.map((entry) => {
                        return (
                            <li key={entry.id}>
                                <h4>{entry.degree}</h4>
                                <p>{entry.program}</p>
                                <p>{entry.school}</p>
                                <p>{entry.startDate} - {entry.endDate}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Education;