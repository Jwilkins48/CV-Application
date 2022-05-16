import Personal from "../form/personalInfo";

import { Component } from "react";

class PersonalPrev extends Component {
    render(){
        return(
            <>
                <div className="experienceContainer">
                    <h1 className="personalTitle">Personal Information</h1>
                    <input name="name" type='text' placeholder="Full Name"></input>
                    <input name="title" type='text' placeholder="Title"></input>
                    <input name="address" type='text' placeholder="Address"></input>
                    <input name="phone" type='text' placeholder="Phone"></input>
                    <input name="email" type='text' placeholder="Email"></input>
                    <input name="description" type='text' placeholder="Description"></input>
                </div>
            </>
        )
    }
}

export default PersonalPrev