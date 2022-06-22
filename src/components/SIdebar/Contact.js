import { Component } from "react";

import homeIcon from '../../imgs/home.svg';
import mailIcon from '../../imgs/mail.svg';
import phoneIcon from '../../imgs/phone.svg';
import mapIcon from '../../imgs/map-pin.svg';


class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: "",
            email: "",
            phoneNum: "",
            site: "",
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

    handleAddressChange = (e) => {
        this.setState({
            address: e.target.value,
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value,
        });
    }

    handleSiteChange = (e) => {
        this.setState({
            site: e.target.value,
        });
    }

    render () {
        const { address, email, phoneNum, site, hover, edit } = this.state;

        return (
            <div className="sidebar-section" onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>
                <h4 className="section-title">CONTACT</h4>
                <ul className="section-info">
                    <li className="contact-item">
                        <img src={homeIcon} alt="Home" />
                        <p>{address ? address : "123 Abc Street, City, Country"}</p>
                    </li>
                    <li className="contact-item">
                        <img src={mailIcon} alt="Email" />
                        <p>{email ? email: "yourname@mail.com"}</p>
                    </li>
                    <li className="contact-item">
                        <img src={phoneIcon} alt="Phone" />
                        <p>{phoneNum ? phoneNum : "123-456-7899"}</p>
                    </li>
                    <li className="contact-item">
                        <img src={mapIcon} alt="Website" />
                        <p>{site ? site : "www.yoursite.com"}</p>
                    </li>
                </ul>
                {hover && <button className="edit-btn" onClick={this.toggleForm}>EDIT</button>}
                {edit && 
                    <form action="" className="edit-form">
                        <div className="form-entry">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" id="address" onChange={this.handleAddressChange}/>
                        </div>
                        <div className="form-entry">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" id="email" onChange={this.handleEmailChange}/>
                        </div>
                        <div className="form-entry">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" id="phone" onChange={this.handlePhoneChange}/>
                        </div>
                        <div className="form-entry">
                            <label htmlFor="website" className="form-label">Website</label>
                            <input type="text" id="website" onChange={this.handleSiteChange}/>
                        </div>
                        
                        <button className="close-btn" onClick={this.toggleForm}>Close</button>
                    </form>
                }

            </div>
        );
    }
}

export default Contact;