import Header from "./components/header";
import Personal from "./components/form/personalInfo";
import Education from "./components/form/education";
import Experience from "./components/form/experience";
import PersonalPrev from "./components/formPreview/personalPrev";
import { useState } from 'react';

function App() {
  const [personal_info, updatePersonal] = useState([]);

  const addPersonal = (personal) => {
    updatePersonal([...personal_info, personal]);
  };

    return (
      <>
        <Header />
        <div className="formContainer">
          <div className="cvForm">
            <Personal addPersonal={addPersonal} />
            <Experience />
            <Education />
          </div>
        
          <div className="cvPreview">
            <PersonalPrev personal_info = {personal_info}/>

          </div>
        </div>
        
      </>
    );
  }



export default App;
