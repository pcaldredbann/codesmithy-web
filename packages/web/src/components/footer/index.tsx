import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";
import config from "../../config";

const Footer: React.FC = () => {
  return (
    <footer id="main-footer">
      <div>
        <h1 className="footer-heading">Code Smithy Ltd</h1>
        <address>
          <span>Registered in England &amp; Wales 12066691</span>
          <br />
          <FontAwesomeIcon icon={Icons.faEnvelope} />{" "}
          <a href="mailto:hello@thecodesmithy.com">hello@thecodesmithy.com</a>
          <br />
          <FontAwesomeIcon icon={Icons.faPhone} />{" "}
          <a href="tel:07505494975">07505494975</a>
        </address>
      </div>
      <div>
        <ul>
          <li>
            <a href={config.social.linkedInUrl} target="_new">
              <FontAwesomeIcon icon={BrandIcons.faLinkedin} />
            </a>
          </li>
          <li>
            <a href={config.social.githubUrl} target="_new">
              <FontAwesomeIcon icon={BrandIcons.faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
