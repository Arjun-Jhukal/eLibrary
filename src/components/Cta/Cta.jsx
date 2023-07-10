import image from "../../assets/img/bg/02.jpg";
import donation from "../../assets/img/bg/01.jpg";
const Cta = () => {
  const ctaStyle = {
    background: `url(${image})`,
  };
  const donationStyle = {
    background: `url(${donation})`,
  };
  return (
    <>
      <div className="cta" style={ctaStyle}>
        <div className="container">
          <div className="cta__content">
            <h1 className="lg__heading">Place To Study</h1>
            <p>There are group study rooms, individual study carrels, computers labs, and other spaces to study in the Libraries.</p>
            <button className="btn btn__paid">Reserve a Group Seat</button>
          </div>
        </div>
      </div>
      <div className="donation" style={donationStyle}>
        <div className="container">
          <div className="donation__content">
            <div className="text">
              <span>Donation</span>
              <h1 className="lg__heading">Support the Library, Give Today.</h1>
            </div>
            <button className="btn btn__donate">Make a Donation</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
