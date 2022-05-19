import Header from "./components/header";
import Personal from "./components/form/personalInfo";
import Education from "./components/form/education";
import Experience from "./components/form/experience";
import PersonalPrev from "./components/formPreview/personalPrev";
import { useState } from 'react';
import EducationPrev from "./components/formPreview/EducationPrev";


function App() {
  const [personal_info, updatePersonal] = useState([]);
  const [experience_info, updateExperience] = useState([]);
  const [education_info, updateEducation] = useState([]);

  const addPersonal = (personal) => {
    updatePersonal([...personal_info, personal]);
  };
  const addExperience = (experience) => {
    updateExperience([...experience_info, experience]);
  };
  const addEducation = (education) => {
    updateEducation([...education_info, education]);
  };

    return (
      <>
        <Header />
        <div className="formContainer">
          <div className="cvForm">
            <Personal addPersonal={addPersonal} />
            <Experience />
            <Education addEducation={addEducation} />
          </div>
        
          <div className="cvPreview">
            <PersonalPrev personal_info = {personal_info}/>
            <EducationPrev education_info = {education_info} />
          </div>
        </div>
        
      </>
    );
  }



export default App;
