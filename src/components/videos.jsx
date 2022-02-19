export const Videos = (props) => {
  return (
    <div id="testimonials" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Customer Testimonials</h2>
          <p>
            Hear what our clients have to say about DecisionHub in this video!
          </p>
        </div>
        {props.data
          ? props.data.map((video, i) => (
              <iframe
                key={i}
                style={{ margin: 20, maxWidth: "calc(100% - 40px)" }}
                width="464"
                height="261"
                src={video.link}
                title="YouTube video player, customer testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ))
          : "loading"}
      </div>
    </div>
  );
};
