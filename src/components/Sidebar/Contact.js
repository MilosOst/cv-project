import { useState } from "react";

import homeIcon from '../../imgs/home.svg';
import mailIcon from '../../imgs/mail.svg';
import phoneIcon from '../../imgs/phone.svg';
import mapIcon from '../../imgs/map-pin.svg';


function Contact() {
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [site, setSite] = useState("");
    const [hover, setHover] = useState(false);
    const [edit, setEdit] = useState(false);

    const toggleForm = (e) => {
        setHover(!hover);
        setEdit(!edit);
    };

    return (
        <div className="section" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
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
                    <p>{phone ? phone : "123-456-7899"}</p>
                </li>
                <li className="contact-item">
                    <img src={mapIcon} alt="Website" />
                    <p>{site ? site : "www.yoursite.com"}</p>
                </li>
            </ul>
            {hover && <button className="btn" onClick={toggleForm}>EDIT</button>}
            {edit && 
                <form action="" className="edit-form">
                    <div className="form-entry">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" id="address" onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="website" className="form-label">Website</label>
                        <input type="text" id="website" onChange={(e) => setSite(e.target.value)}/>
                    </div>
                    
                    <button className="close-btn" onClick={toggleForm}>Close</button>
                </form>
            }
        </div>
    );
}


export default Contact;