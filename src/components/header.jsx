export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <h2 style={{ marginTop: 80, textTransform: "none" }}>
                  Introducing DecisionHub
                </h2>
                <iframe
                  width="560"
                  height="315"
                  style={{ margin: 20, maxWidth: "calc(100% - 40px)" }}
                  src="https://www.youtube.com/embed/VLU5WalKpDM?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div>
                  <a
                    href="https://calendly.com/decisionhub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{ marginTop: 40 }}
                  >
                    <span style={{ color: "white" }}>Book a Consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
