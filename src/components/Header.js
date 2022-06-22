import React, { Component } from "react";
import pic from '../imgs/profile-pic.png'


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profilePic: pic,
            name: "",
            title: "",
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

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    handleImageChange = (e) => {
        this.setState({
            profilePic: URL.createObjectURL(e.target.files[0]),
        });
    }

    render() {
        const { profilePic, name, title, hover, edit } = this.state;

        return (
            <header className="header" onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>
                <div className="profile-pic">
                    <img src={profilePic} alt="Photo of Yourself" />
                </div>
                <div className="header-title">
                    <h1 className="name">{name ? name : "YOUR NAME"}</h1>
                    <h4 className="title">{title ? title: "YOUR TITLE"}</h4>
                </div>
                {hover && <button className="btn" onClick={this.toggleForm}>EDIT</button>}

                { edit && 
                    <form action="" className="edit-form">
                    <div className="form-entry">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="job-title">Title</label>
                        <input type="text" id="job-title" onChange={this.handleTitleChange}/>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="profile-pic">Profile Picture</label>
                        <input type="file" id="profile-pic" accept="image/*" onChange={this.handleImageChange}/>
                    </div>
                    
                    <button className="close-btn" onClick={this.toggleForm}>Close</button>
                </form>
                }
                
            </header>
        );
    }
}

export default Header;