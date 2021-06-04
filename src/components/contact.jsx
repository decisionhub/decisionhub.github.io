export const Contact = (props) => {
  return (
    <div id="footer">
      <div className="social">
        <div
          className="section-title"
          style={{ width: "100%", paddingLeft: "25%", paddingRight: "25%" }}
        >
          <h2>Get Started</h2>
          <p>
            Ready to learn more about DecisionHub and how it can help your
            business make more informed group decisions? Please reach out to us
            at{" "}
            <a href="mailto:support@decisionhub.org">
              <span style={{ color: "blue" }}>support@decisionhub.org</span>
            </a>{" "}
            to speak to one of the members from the team. We would love to chat!
          </p>
        </div>
        <div className="section-title" style={{ marginBottom: "30px" }}>
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
        <p>&copy; 2021 DecisionHub</p>
      </div>
    </div>
  );
};
