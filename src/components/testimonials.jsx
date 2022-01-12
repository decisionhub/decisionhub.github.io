import Carousel from "react-material-ui-carousel";

export const Testimonials = (props) => {
  return (
    <div id="testimonials-continued">
      <div className="section-title text-center">
        <h2>What our clients say</h2>
      </div>
      <div style={{ textAlign: "center", width: 500, margin: "auto" }}>
        <Carousel navButtonsAlwaysVisible={true}>
          {props?.data?.map((d, i) => (
            <Testimonial key={`${d.name}-${i}`} data={d} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

function Testimonial({ data }) {
  return (
    <div style={{ height: 400, maxWidth: 400, margin: "auto" }}>
      <img
        src={data.img}
        className="img-circle"
        alt="Customer Feedback"
        style={{ width: 200, height: 200 }}
      />
      <h3>{data.name}</h3>
      <h5>{data.role}</h5>
      <p>{data.text}</p>
    </div>
  );
}
