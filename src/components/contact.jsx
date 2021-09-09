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
            <p>
              Ready to learn more about DecisionHub and how it can help your
              business make more informed group decisions? Please reach out to
              us at{" "}
              <a href="mailto:support@decisionhub.org">
                <span>support@decisionhub.org</span>
              </a>{" "}
              to speak to one of the members from the team. We would love to
              chat!
            </p>
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
        <p>&copy; {" " + new Date().getFullYear()} DecisionHub</p>
      </div>
    </div>
  );
};
