import { Component } from "react";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi laboriosam sunt rerum adipisci cumque voluptatem nihil tempora ut, velit numquam sint reiciendis distinctio, rem facere accusamus voluptate porro. Eos!",
        };
    }

    render() {
        return (
            <div className="main-">
                <h4 className="section-title">Profile</h4>
                <p>{this.state.description}</p>
            </div>
        );
    }
}


export default Profile;