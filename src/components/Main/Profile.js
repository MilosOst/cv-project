import { useState } from "react";


function Profile() {
    const [description, setDescription] = useState("");
    const [hover, setHover] = useState(false);
    const [edit, setEdit] = useState(false);

    const toggleForm = (e) => {
        setHover(!hover);
        setEdit(!edit);
    };
    
    return (
        <div className="section" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <h4 className="section-title">PROFILE</h4>
            <p>{description ? description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat inventore accusamus autem amet. Quibusdam sed veniam provident doloremque soluta nisi itaque pariatur non vitae sint. Quae ea dolores facilis."}</p>
            
            {hover && <button className="btn" onClick={toggleForm}>EDIT</button>}

            {edit &&
            <form action="" className="edit-form">
                <div className="form-entry">
                    <label htmlFor="address" className="form-label">Description</label>
                    <textarea id="description" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                
                <button className="close-btn" onClick={toggleForm}>Close</button>
            </form>
            }
        </div>
    );
}

export default Profile;