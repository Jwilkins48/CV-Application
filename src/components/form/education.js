import { Component } from "react";

class Education extends Component {
    render(){
        return(
            <>
                <div className="educationContainer">
                    <h1 className="educationTitle">Education</h1><button>Save</button>
                    <input id="school" name="school" type='text' placeholder="School"></input>
                    <input id="educationCity" name="city" type='text' placeholder="City"></input>
                    <input id="degree" name="degree" type='text' placeholder="Degree"></input>
                    <input id="educationFrom" name="from" type='text' placeholder="From"></input>
                    <input id="educationTill" name="till" type='text' placeholder="Till"></input>
                </div>
            </>
        )
    }
}

export default Education