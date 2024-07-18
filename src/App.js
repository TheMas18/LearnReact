import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//L1
// let name = "TheMas";
// function App() {
//   return (
//     <>
//       <nav>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </nav>
//       <div classNameName="container">
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
//           aliquid delectus nulla sunt exercitationem nostrum culpa magnam
//           blanditiis corporis, accusamus reiciendis, maiores illo deserunt fuga
//           natus voluptates distinctio est minus impedit eius fugiat ratione.
//         </p>
//       </div>
//       <div classNameName="blank">Hello {name}</div>
//     </>
//   );
// }

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
    <Router>
      {/* we can add any name for props */}
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* default props */}
      {/* <Navbar/> */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
