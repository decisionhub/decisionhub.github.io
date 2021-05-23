export const Contact = (props) => {
  return (
    <div>
      <div id="footer">
        <div className="social">
          <ul>
            <li>
              <a href={props.data ? props.data.email : "/"}>
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
    </div>
  );
};
