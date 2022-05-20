import { useState } from 'react';

function Experience({addExperience}){
    const [experienceInfo, setExperienceInfo] = useState({
        position: "",
        company: "",
        city: "",
        from: "",
        till: "",
    });

    const handleChange = (e) => {
        setExperienceInfo({ ...experienceInfo, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addExperience(experienceInfo);
        setExperienceInfo({
            position: "",
            company: "",
            city: "",
            from: "",
            till: "",
        })
    }
        return(
            <>
                <div className="experienceContainer">
                    <form onSubmit={handleSubmit}>
                    <h1 className="experienceTitle">Experience</h1>
                    <input id="position" name="position" type='text' placeholder="Position" onChange={handleChange} value={experienceInfo.position}></input>
                    <input id="company" name="company" type='text' placeholder="Company" onChange={handleChange} value={experienceInfo.company}></input>
                    <input id="city" name="city" type='text' placeholder="City" onChange={handleChange} value={experienceInfo.city}></input>
                    <input id="experienceFrom" name="from" type='text' placeholder="From" onChange={handleChange} value={experienceInfo.from}></input>
                    <input id="experienceTill" name="till" type='text' placeholder="Till" onChange={handleChange} value={experienceInfo.till}></input>
                    <button type='submit'>Save</button>
                    </form>
                </div>
            </>
        )
    }

export default Experience


