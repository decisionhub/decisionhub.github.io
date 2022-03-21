export const Features = (props) => {
  return (
    <>
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Features</h2>
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
      {/*Removed for now*/}
      {/* <div id="features-continued" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <div className="section-title">
              <h2>Product Demo</h2>
              <p>
                5-minute demo video showing all the key aspects of
                DecisionHub&apos;s platform.
              </p>
            </div>
            <iframe
              width="672"
              height="378"
              style={{ margin: 20, maxWidth: "calc(100% - 40px)" }}
              src="https://www.youtube.com/embed/ivCk8-kwKyw"
              title="YouTube video player, DecisionHub demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div> */}
    </>
  );
};
