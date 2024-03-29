import "./Components/NavigationBar";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import FindATutor from "./Pages/FindATutor";
import Tabs from "./Components/Tabs";
import AuthContextProvider from "./Contexts/AuthContext";
import Login from "./Pages/Login";
import TeacherProfile from "./Pages/TeacherProfile";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />{" "}
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/findatutor" element={<FindATutor />} />
            <Route path="/search" element={<Search />}></Route>
            <Route path="/joinastutor" element={<FindATutor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/TeacherProfile" element={<TeacherProfile />} />
          </Routes>
        </AuthContextProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
