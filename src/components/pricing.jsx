export const Pricing = (props) => {
  return (
    <div id="pricing" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Pricing</h2>
          <p>
            We offer 3 plans with various access levels on DecisionHub. Each
            plan has a 1 month free trial option!
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-12 col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="pricing-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
