import { Component } from "react";

class Education extends Component {
    render(){
        return(
            <>
                <div className="educationContainer">
                    <h1 className="educationTitle">Education</h1>
                    <input name="school" type='text' placeholder="School"></input>
                    <input name="city" type='text' placeholder="City"></input>
                    <input name="degree" type='text' placeholder="Degree"></input>
                    <input name="from" type='text' placeholder="From"></input>
                    <input name="till" type='text' placeholder="Till"></input>
                </div>
            </>
        )
    }
}

export default Education