import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => (
  <React.Fragment>
    <footer className="Footer">
      <div className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-left text-white">
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/episodes">Episodes</NavLink>
                </li>
                <li>
                  <NavLink to="/heart">Grow a Heart to Impart</NavLink>
                </li>
                <li>
                  <NavLink to="/listen">Listen</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Listen In.</h3>
              <div className="text-center">
                <a className="btn btn-light" href="#!">
                  Subscribe via iTunes
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://brightsaltmedialabs.com/buildingoneanotheradmin/wp-content/uploads/2018/11/logo-white.png"
                alt="Leading Moments"
                className="mb-3 Footer__logo"
              />
              <p>Building One Another is a podcast of Leading Moments.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="p-3 text-white bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            &copy; 2018 Leading Moments LLC. Web design by{' '}
            <a className="text-white" href="https://brightsaltmedia.com">
              <u>Bright Salt Media Labs</u>
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default Footer
