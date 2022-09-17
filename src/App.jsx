import "./App.css";
import Navbar from "./components/Navbar";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="box">
          <LeftBox />
          <RightBox />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
