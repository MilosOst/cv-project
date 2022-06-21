import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profilePic: '',
            name: 'Michael Jordan',
            title: 'Web Developer',
        }
    }

    render() {
        const { profilePic, name, title } = this.state;

        return (
            <header className="header">
                <div className="profile-pic">
                    <img src={profilePic} alt="Profile Picture" />
                </div>
                <div className="header-title">
                    <h1 className="name">{name}</h1>
                    <h4 className="title">{title}</h4>
                </div>
            </header>
        );
    }
}

export default Header;