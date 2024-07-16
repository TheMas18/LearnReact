import "./App.css";
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
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default App;
