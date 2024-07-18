import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
             
            </ul>
            
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
          </div>
        </div>
      </nav>
    </div>
  );
}

// we are setting type for props because if we mistakenly passed any thing different
// of decided type it can create issues
// for example if you set prop type string and you passed Int
// doing this we are ensuring the type is not different
//isRequired make sure that props are their otherwise it shows error .it makes sure your props are not undefined
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

//If we dont passed any props their it will set this default props
// Navbar.defaultProps={
//     title:'set title here',
//     aboutText:'Mas'
// }