import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";
import Allusers from "./components/Allusers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <div className="container"> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users/all" element={<Allusers />} />
          <Route exact path="/user/create" element={<CreateUser />} />
          {/* </div> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
