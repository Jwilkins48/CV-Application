import Header from "./components/header";
import Personal from "./components/personalInfo";
import Education from "./components/education";
import Experience from "./components/experience";

function App() {
    return (
      <>
        <Header />
        <div className="formContainer">
          <form className="cvForm">
            <Personal />
            <Experience />
            <Education />
          </form>

          <form className="cvPreview">
            <Personal />
            <Experience />
            <Education />
          </form>
        </div>
        
      </>
    );
}

export default App;
