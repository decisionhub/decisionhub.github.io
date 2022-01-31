export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Interested to learn more about the team behind DecisionHub? Find out
            here.
          </p>
        </div>
        <div className="container" id="row">
          {props.execTeam
            ? props.execTeam.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-sm-6 team">
                  <div
                    className="thumbnail"
                    style={i % 2 === 0 ? { float: "right" } : { float: "left" }}
                  >
                    {" "}
                    <img src={d.img} alt="Team Member" className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div className="container" id="row">
          {props.team
            ? props.team.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-sm-6 team">
                  <div
                    className="thumbnail"
                    style={i % 2 === 0 ? { float: "right" } : { float: "left" }}
                  >
                    {" "}
                    <img src={d.img} alt="Team Member" className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <p>
          We are also working with{" "}
          <a
            href="https://igslimited.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IGS Limited
          </a>
          , who help with our sales and marketing.
        </p>
      </div>
    </div>
  );
};
