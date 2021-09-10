import styled from "styled-components";

const GetStartedText = styled.div`
  width: 100%;
  padding-left: 25%;
  padding-right: 25%;
`;

export const Contact = (props) => {
  return (
    <div id="footer">
      <div className="social">
        <GetStartedText>
          <div className="section-title">
            <h2>Get Started</h2>
            <p style={{ maxWidth: 820, margin: "auto" }}>
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
              className="btn btn-custom btn-lg page-scroll"
              rel="noreferrer"
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
            <a href={props.data ? "mailto:" + props.data.email : "/"}>
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.twitter : "/"}>
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.linkedin : "/"}>
              <i className="fa fa-linkedin"></i>
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
