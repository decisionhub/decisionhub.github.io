export const Pricing = () => {
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
          <img
            src="img/pricing.svg"
            alt="Pricing Plan"
            style={{ maxWidth: 800, width: "--webkit-fill-available" }}
          />
        </div>
      </div>
    </div>
  );
};
