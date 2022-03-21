export const Benefits = (props) => {
  return (
    <>
      <div id="benefits" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Benefits of using DecisionHub</h2>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
                    style={{ marginBottom: 20 }}
                  >
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </>
  );
};
