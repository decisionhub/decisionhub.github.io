export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="section-title text-center">
        <h2>What our clients say</h2>
      </div>
      <div
        className="container"
        style={{ display: "flex", textAlign: "center" }}
      >
        <div className="row" style={{ margin: "auto" }}>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  style={{ height: 450, maxWidth: 400, margin: "auto" }}
                >
                  <img
                    src={d.img}
                    className="img-circle"
                    alt="Customer Feedback"
                    style={{ width: 200, height: 200 }}
                  />
                  <h3>{d.name}</h3>
                  <h5>{d.role}</h5>
                  <p>{d.text}</p>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
