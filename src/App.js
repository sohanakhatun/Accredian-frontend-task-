import { Route, Routes } from "react-router-dom";
import "./App.css";

import Register from './Register';
import Home from "./Home";
import Login from "./Login";
function App() {
  return (
    <div className="App">

    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
