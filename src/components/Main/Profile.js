import { Component } from "react";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "",
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

    handleChange = (e) => {
        this.setState({
            description: e.target.value,
        });
    }
    

    render() {
        const curr = this;
        const {description, hover, edit} = this.state;

        return (
            <div className="profile-section" onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>
                <h4 className="section-title">Profile</h4>
                <p>{description ? description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat inventore accusamus autem amet. Quibusdam sed veniam provident doloremque soluta nisi itaque pariatur non vitae sint. Quae ea dolores facilis."}</p>
                <button className={"edit-btn " + (hover ? "active" : "inactive")} onClick={this.toggleForm}>EDIT</button>
                

                {edit &&
                <form action="" className={"edit-form"}>
                    <div className="form-entry">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea id="description" onChange={this.handleChange}/>
                    </div>
                    
                    <button className="close-btn" onClick={this.toggleForm}>Close</button>
                </form>
                }
                


            </div>
        );
    }
}


export default Profile;