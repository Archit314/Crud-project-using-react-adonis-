import "./App.css";
import Navbar from "./components/Navbar";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <CreateUser />
      </div>
    </>
  );
}

export default App;
