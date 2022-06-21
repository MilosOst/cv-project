import { Component } from "react";

import homeIcon from '../../imgs/home.svg';
import mailIcon from '../../imgs/mail.svg';
import phoneIcon from '../../imgs/phone.svg';
import mapIcon from '../../imgs/map-pin.svg';


class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: '123 Abc Street, Toronto, ON',
            email: 'yourname@mail.com',
            phoneNum: '5033229513',
            site: 'www.yoursite.com',
        }
    }

    render () {
        const { address, email, phoneNum, site } = this.state;

        return (
            <div className="sidebar-section">
                <h4 className="section-title">CONTACT</h4>
                <ul className="section-info">
                    <li className="contact-item">
                        <img src={homeIcon} alt="Home" />
                        <p>{address}</p>
                    </li>
                    <li className="contact-item">
                        <img src={mailIcon} alt="Email" />
                        <p>{email}</p>
                    </li>
                    <li className="contact-item">
                        <img src={phoneIcon} alt="Phone" />
                        <p>{phoneNum}</p>
                    </li>
                    <li className="contact-item">
                        <img src={mapIcon} alt="Website" />
                        <p>{site}</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Contact;