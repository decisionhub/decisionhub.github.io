export const Pricing = () => {
  return (
    <div id="pricing" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Pricing</h2>
          <p>
            We offer 3 plans with various access levels on DecisionHub. Each
            plan has a <b>1 month free trial</b> option!
          </p>
        </div>
        <div className="container-fluid">
          <div className="container" style={{ width: "100%", maxWidth: 1000 }}>
            <div className="row">
              <div className="col-sm-4" style={{ paddingBottom: 50 }}>
                <div className="card text-center">
                  <div className="title">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    <h2>Basic</h2>
                  </div>
                  <div className="price">
                    <h4>
                      <sup>$</sup>300
                      <span style={{ fontSize: 16 }}>/mo</span>
                    </h4>
                  </div>
                  <div className="option">
                    <ul>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 1
                        Program
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 20
                        Applications
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 1
                        Reviewer
                      </li>
                      <li>
                        <i className="fa fa-times" aria-hidden="true"></i> No
                        Logo Branding
                      </li>
                    </ul>
                  </div>
                  <a href="https://app.decisionhub.org/signup">
                    Start Free Trial
                  </a>
                </div>
              </div>

              <div className="col-sm-4" style={{ paddingBottom: 50 }}>
                <div className="card text-center">
                  <div className="title">
                    <i className="fa fa-plane" aria-hidden="true"></i>
                    <h2>Standard</h2>
                  </div>
                  <div className="price">
                    <h4>
                      <sup>$</sup>600
                      <span style={{ fontSize: 16 }}>/mo</span>
                    </h4>
                  </div>
                  <div className="option">
                    <ul>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 2
                        Programs
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 100
                        Applications
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 5
                        Reviewers
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Logo
                        Branding
                      </li>
                    </ul>
                  </div>
                  <a href="https://app.decisionhub.org/signup">
                    Start Free Trial
                  </a>
                </div>
              </div>

              <div className="col-sm-4" style={{ paddingBottom: 50 }}>
                <div className="card text-center">
                  <div className="title">
                    <i className="fa fa-rocket" aria-hidden="true"></i>
                    <h2>Premium</h2>
                  </div>
                  <div className="price">
                    <h4>
                      <sup>$</sup>1200
                      <span style={{ fontSize: 16 }}>/mo</span>
                    </h4>
                  </div>
                  <div className="option">
                    <ul>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 5
                        Programs
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>{" "}
                        Unlimited Applications
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>{" "}
                        Unlimied Reviewers
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Logo
                        Branding
                      </li>
                    </ul>
                  </div>
                  <a href="https://app.decisionhub.org/signup">
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={{ paddingTop: 20 }}>
          If you are a non-profit organization, a social enterprise, or need a{" "}
          <b>custom</b> plan, please{" "}
          <a href="mailto:support@decisionhub.org">
            <span>contact us</span>!
          </a>
        </p>
        <p>We are happy to build a customized plan that fits your needs.</p>
      </div>
    </div>
  );
};
