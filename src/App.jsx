import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import Redux from "./Redux";
import Reduxuser from "./Reduxuser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/redux" element={ <Redux /> } />
        <Route path="/reduxuser" element={ <Reduxuser /> } />
        <Route path="/user" element={ <User /> } />
      </Routes>
    </>
  );
}

export default App;
