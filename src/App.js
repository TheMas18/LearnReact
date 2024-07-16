import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
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
  return (
    <>
      {/* we can add any name for props */}
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* default props */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutText="About Us" /> 
      <div className="container my-3">

      <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
