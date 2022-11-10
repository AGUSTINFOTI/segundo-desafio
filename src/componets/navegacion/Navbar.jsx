import React from "react"
import {Link} from "react-router-dom"
export default function Navbar () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to='/'>
            <img src='./terramias.jpeg' width={120}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <Link className="nav-link " to='/' >Inicio </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Ingreso'>Ingreso</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Items'>Items</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
