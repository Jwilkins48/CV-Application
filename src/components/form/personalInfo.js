import { useState } from 'react';


function Personal({addPersonal}){

    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        title: "",
        address: "",
        email: "",
    });

    const handleChange = (e) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addPersonal(personalInfo);
        setPersonalInfo({
            name: "",
            title: "",
            address: "",
            email: "",
        })
    }

    return(
        <>
            <div className="personalContainer">
                <form onSubmit={handleSubmit}>
                <h1 className="personalTitle">Personal Information</h1>
                <input name="name" id="name" type='text' placeholder="Full Name" onChange={handleChange} value={personalInfo.name} ></input>
                <input name="title" id="title" type='text' placeholder="Title" onChange={handleChange} value={personalInfo.title}></input>
                <input name="address" id="address" type='text' placeholder="Address" onChange={handleChange} value={personalInfo.address}></input>
                <input name="email" id="email" type='text' placeholder="Email" onChange={handleChange} value={personalInfo.email}></input>
                <button type='submit'>Save</button>
                </form>
            </div>
        </>
    )
}

export default Personal