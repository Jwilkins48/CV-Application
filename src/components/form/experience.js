import { Component } from "react";

class Experience extends Component {
    render(){
        return(
            <>
                <div className="experienceContainer">
                    <h1 className="experienceTitle">Experience</h1><button>Save</button>
                    <input id="position" name="position" type='text' placeholder="Position"></input>
                    <input id="company" name="company" type='text' placeholder="Company"></input>
                    <input id="city" name="city" type='text' placeholder="City"></input>
                    <input id="experienceFrom" name="from" type='text' placeholder="From"></input>
                    <input id="experienceTill" name="till" type='text' placeholder="Till"></input>
                </div>
            </>
        )
    }
}

export default Experience