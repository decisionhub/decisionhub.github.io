export const Videos = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Client Videos</h2>
          <p>
            Hear what our clients have to say about DecisionHub in these videos!
          </p>
        </div>
        {props.data
          ? props.data.map((video, i) => (
              <iframe
                key={i}
                width="560"
                height="315"
                src={video.link}
                title="YouTube video player"
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
