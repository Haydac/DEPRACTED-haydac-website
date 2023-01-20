// NAVBAR
import React, { Component } from "react";
import { ReactSVG } from "react-svg";

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
        <div className="container position-relative">
          <a className="navbar-brand" href="/">
            {/* convert to svg */}
            <ReactSVG
              beforeInjection={(svg) => {
                svg.setAttribute("style", "width:80px");
              }}
              className="navbar-brand-regular"
              src={this.props.imageData}
              alt="haydac-logo"
            />
            <ReactSVG
              beforeInjection={(svg) => {
                svg.setAttribute("style", "width:80px");
              }}
              className="navbar-brand-sticky"
              src={"/img/logo-sticky.svg"}
              alt="sticky brand-logo"
            />
            {/* <img
              className="navbar-brand-sticky"
              src="/img/logo.png"
              alt="sticky brand-logo"
            /> */}
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="navbarToggler"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-inner">
            {/*  Mobile Menu Toggler */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="navbarToggler"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <nav>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link" href="/#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#features">
                    FEATURES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#about">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#faq">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
