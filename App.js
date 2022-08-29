import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Items from "./components/Items";
import Nav from "./components/Nav";
import Add from "./components/Add";
import Onefull from "./components/Onefull";
import Profile from "./components/Profile";
import Sign from "./components/Sign";
import PrivateComponent from "./components/Private";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            {" "}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Items />
                </>
              }
            />
            <Route path="/add" element={<Add />} />
            <Route path="/book/:id" element={<Onefull />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
