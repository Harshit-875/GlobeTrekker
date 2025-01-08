import React from 'react'
import WeatherApp from './Weather.js'
import {Link} from 'react-router-dom'

function navbar(props) {
  return (
    <>
      <nav
        style={{ backgroundColor: "transparent", fontSize: '22px', fontWeight: "bold" }}
        className="navbar navbar-expand-lg fixed"
      >
        <div className="container-fluid d-flex">
          <div >
            <Link style={{ fontSize: '22px' }} className="navbar-brand text-white" to="/">
              Travel
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white active" aria-current="page" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white active" aria-current="page" to="/">
                  Discover
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white active" aria-current="page" to="/places">
                  Places
                </Link>
              </li>
              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/weather" onClick={WeatherApp}>Weather Forecast</Link></li>
            <li><Link className="dropdown-item" to="/currency">Currency Converter</Link></li>
          </ul>
        </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}



export default navbar
