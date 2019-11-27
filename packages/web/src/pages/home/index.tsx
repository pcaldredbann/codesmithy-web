import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import "./home-page.scss";

const HomePage = () => {
  const [contactName, setContactName] = React.useState("");
  const [contactDetail, setContactDetail] = React.useState("");
  const [contactNameError, setContactNameError] = React.useState("");
  const [contactDetailError, setContactDetailError] = React.useState("");

  React.useEffect(() => {
    if (contactName) setContactNameError("");
    if (contactDetail) setContactDetailError("");
  }, [contactName, contactDetail]);

  const validateAndSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName) setContactNameError(`You haven't provided a name`);
    if (!contactDetail) setContactDetailError(`You haven't provided a contact`);
    // TODO: do the sendy stuff!
  };

  return (
    <React.Fragment>
      <div id="main-feature">
        <div id="main-feature-content" className="panel">
          <form
            id="contact_form"
            name="contact-form"
            onSubmit={(e: React.FormEvent) => validateAndSend(e)}
          >
            <h2 className="form-title">Get In Touch!</h2>
            <p>
              We'd love to hear what drives you and we'd like to help if we can.
              Please get in touch if you think we can work together.
            </p>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={contactName}
                onChange={e => setContactName(e.target.value)}
                placeholder="Your name"
              />
              <span
                className="error"
                style={{ display: contactNameError ? "inline" : "none" }}
              >
                {contactNameError}
              </span>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="detail"
                value={contactDetail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setContactDetail(e.target.value)
                }
                placeholder="Your contact details"
              />
              <span
                className="error"
                style={{ display: contactDetailError ? "inline" : "none" }}
              >
                {contactDetailError}
              </span>
            </div>
            <div className="form-group">
              <button id="contact_button" type="submit" className="btn w-50">
                Send Information
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="sub-feature-panel-wrapper">
        <div className="sub-feature-panel bg-red alpha-4">
          <h2>Analyze</h2>
          <p>
            We're problem solvers and we've solved a lot of problems! Sometimes
            all it takes is that different perspective or different approach,
            have a look at how our analytical approach can help you.
          </p>
          <div className="read-more">
            <a href="/services/code">
              Read more about this{" "}
              <FontAwesomeIcon icon={Icons.faChevronRight} />
            </a>
          </div>
        </div>
        <div className="sub-feature-panel bg-yellow alpha-4">
          <h2>Plan</h2>
          <p>
            We're pragmatic, organized and we've worked together for a long
            time. Our planning cycle tends to be quite short as a lot of our
            working process is autonomous, something you visibly benefit from!
          </p>
          <div className="read-more">
            <a href="/services/code">
              Read more about this{" "}
              <FontAwesomeIcon icon={Icons.faChevronRight} />
            </a>
          </div>
        </div>
        <div className="sub-feature-panel bg-orange alpha-4">
          <h2>Build</h2>
          <p>
            We're programmers, we've always been programmers. For a long time
            we've built solutions from the ground up in a number of
            technologies. We know how to pick the right tool for the job!
          </p>
          <div className="read-more">
            <a href="/services/code">
              Read more about this{" "}
              <FontAwesomeIcon icon={Icons.faChevronRight} />
            </a>
          </div>
        </div>
        <div className="sub-feature-panel bg-blue alpha-4">
          <h2>Deploy</h2>
          <p>
            We're platform engineers, we've nearly always been platform
            engineers. When the term DevOps was first coined a lot of us
            chuckled that DevOps was something we did organically, it wasn't an
            extra step.
          </p>
          <div className="read-more">
            <a href="/services/code">
              Read more about this{" "}
              <FontAwesomeIcon icon={Icons.faChevronRight} />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
