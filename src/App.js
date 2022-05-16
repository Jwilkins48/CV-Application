import Header from "./components/header";
import Personal from "./components/personalInfo";
import Education from "./components/education";

function App() {
    return (
      <>
        <Header />
        <form className="cvForm">
          <Personal />
          <Education />
        </form>
        
      </>
    );
}

export default App;
