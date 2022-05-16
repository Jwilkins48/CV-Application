import { Component } from "react";

class Experience extends Component {
    render(){
        return(
            <>
                <div className="experienceContainer">
                    <h1 className="experienceTitle">Experience</h1>
                    <input name="position" type='text' placeholder="Position"></input>
                    <input name="company" type='text' placeholder="Company"></input>
                    <input name="city" type='text' placeholder="City"></input>
                    <input name="from" type='text' placeholder="From"></input>
                    <input name="till" type='text' placeholder="Till"></input>
                </div>
            </>
        )
    }
}

export default Experience