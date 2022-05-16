import Header from "./components/header";
import Personal from "./components/personalInfo";

function App() {
    return (
      <>
        <Header />
        <form className="cvForm">
          <Personal />
        </form>
        
      </>
    );
}

export default App;
