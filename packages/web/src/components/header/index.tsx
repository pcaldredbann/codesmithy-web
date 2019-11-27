import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Fonts from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

const Header = () => {
  return (
    <header id="main-header">
      <nav>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={Fonts.faHome} />
              <span className="hide-sm">Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={Fonts.faClock} />
              <span className="hide-sm">Our History</span>
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={Fonts.faCog} />
              <span className="hide-sm">Our Services</span>
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={Fonts.faEnvelope} />
              <span className="hide-sm">Contact Us</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
