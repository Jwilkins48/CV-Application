import { useState } from 'react';


function Education({addEducation}){
    const [educationInfo, setEducationInfo] = useState({
        school: "",
        city: "",
        degree: "",
        from: "",
        till: "",
    });

    const handleChange = (e) => {
        setEducationInfo({ ...educationInfo, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addEducation(educationInfo);
        setEducationInfo({
            school: "",
            city: "",
            degree: "",
            from: "",
            till: "",
        })
    }
    return(
        <>
            <div className="educationContainer">
                <form onSubmit={handleSubmit}>
                    <h1 className="educationTitle">Education</h1>
                    <input id="school" name="school" type='text' placeholder="School" onChange={handleChange} value={educationInfo.school}></input>
                    <input id="educationCity" name="city" type='text' placeholder="City" onChange={handleChange} value={educationInfo.city}></input>
                    <input id="degree" name="degree" type='text' placeholder="Degree" onChange={handleChange} value={educationInfo.degree}></input>
                    <input id="educationFrom" name="from" type='text' placeholder="From" onChange={handleChange} value={educationInfo.from}></input>
                    <input id="educationTill" name="till" type='text' placeholder="Till" onChange={handleChange} value={educationInfo.till}></input>
                    <button className='saveBtn' type='submit'>Save</button>
                </form>
            </div>
        </>
        )
}

export default Education