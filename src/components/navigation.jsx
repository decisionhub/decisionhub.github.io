import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ScrollBar = styled.img`
  height: 60px;
  padding: 0px;
  margin-top: -15px;
`;

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <ScrollBar
              src="img/dh_logo_full.svg"
              alt="Decision Hub Logo"
              style={{ maxWidth: 225 }}
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <ul
            className="nav navbar-nav navbar-right"
            style={{ textAlign: "-webkit-center" }}
          >
            <li>
              <a href="/" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="mission" className="page-scroll">
                Our Mission
              </a>
            </li>
            <li>
              <a href="testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="pricing" className="page-scroll">
                Pricing
              </a>
            </li>
            <li>
              <a href="team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <Button
                href="https://calendly.com/decisionhub"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                style={{
                  backgroundColor: "#5ca9fb",
                  backgroundImage:
                    "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
                  borderRadius: "5px",
                  color: "white",
                  textTransform: "capitalize",
                  margin: 10,
                  maxWidth: 140
                }}
              >
                <span style={{ padding: 10 }}>Book Meeting</span>
              </Button>
            </li>
            <li>
              <Button
                href="https://app.decisionhub.org/signup"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                style={{
                  background: "white",
                  border: "1px solid black",
                  borderRadius: "5px",
                  color: "black",
                  textTransform: "capitalize",
                  margin: 10,
                  maxWidth: 80
                }}
              >
                <span style={{ padding: 10 }}>Register</span>
              </Button>
            </li>
            <li>
              <Button
                href="https://app.decisionhub.org/login"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                style={{
                  background: "white",
                  border: "1px solid black",
                  borderRadius: "5px",
                  color: "black",
                  textTransform: "capitalize",
                  margin: 10,
                  maxWidth: 80
                }}
              >
                <span style={{ padding: 10 }}>Sign In</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
