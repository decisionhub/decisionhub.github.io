import styled from "styled-components";

const GetStartedText = styled.div`
  width: 100%;
  padding: 0px 20px;
  max-width: 820px;
  margin: auto;
`;

export const Contact = (props) => {
  return (
    <div id="footer">
      <div className="social">
        <GetStartedText>
          <div className="section-title">
            <h2>Get Started</h2>
            <p>
              Ready to learn more about DecisionHub and how it can help your
              business make more informed group decisions? Click the button
              below or email us at{" "}
              <a href="mailto:support@decisionhub.org">
                <span>support@decisionhub.org</span>
              </a>{" "}
              to speak to one of the members from the team. We would love to
              chat!
            </p>
            <a
              href="https://calendly.com/decisionhub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-custom btn-lg page-scroll"
              style={{ marginTop: 20 }}
            >
              <span style={{ color: "white" }}>Book Meeting</span>
            </a>
          </div>
        </GetStartedText>
        <div className="section-title-small">
          <h2>Socials</h2>
        </div>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data ? "mailto:" + props.data.email : "/"}
              style={{ border: "none" }}
            >
              <i className="fa fa-envelope" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data ? props.data.twitter : "/"}
              style={{ border: "none" }}
            >
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data ? props.data.linkedin : "/"}
              style={{ border: "none" }}
            >
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data ? props.data.medium : "/"}
              style={{ border: "none" }}
            >
              <i className="fa fa-medium"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} DecisionHub</p>
      </div>
    </div>
  );
};
