import { useState } from "react";
import pic from '../imgs/profile-pic.png'


function Header() {
    const [profilePic, setProfilePic] = useState(pic);
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [hover, setHover] = useState("");
    const [edit, setEdit] = useState("");

    const toggleForm = (e) => {
        setHover(!hover);
        setEdit(!edit);
    };

    const changeImage = (e) => {
        setProfilePic(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <header className="header" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <div className="profile-pic">
                <img src={profilePic} alt="Your Profile" />
            </div>
            <div className="header-title">
                <h1 className="name">{name ? name : "YOUR NAME"}</h1>
                <h4 className="title">{title ? title: "YOUR TITLE"}</h4>
            </div>
            {hover && <button className="btn" onClick={toggleForm}>EDIT</button>}

            { edit && 
                <form action="" className="edit-form">
                <div className="form-entry">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-entry">
                    <label htmlFor="job-title">Title</label>
                    <input type="text" id="job-title" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-entry">
                    <label htmlFor="profile-pic">Profile Picture</label>
                    <input type="file" id="profile-pic" accept="image/*" onChange={changeImage}/>
                </div>
                
                <button className="close-btn" onClick={toggleForm}>Close</button>
            </form>
            }
        </header>
    );
}


export default Header;