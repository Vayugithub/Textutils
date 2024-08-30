import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title = "Textutils" aboutText = "About Textutils"/>
      <div className="container my-3">
      <TextForm heading="Enter The Here to Analyze below"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
