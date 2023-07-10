import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/dataContext";
const Plan = () => {
  const { plan } = useContext(DataContext);
  return (
    <>
      {plan.map((plan, index) => {
        return (
          <div className="col-lg-6 col-12" key={index}>
            <div className="plan__item">
              <div className="plan__item__header">
                <h1 className="sm__heading">{plan.title}</h1>
                <p>{plan.brief}</p>
                <div className="discount">
                  <del className="price">1999.99</del>
                  <span>save 50%</span>
                </div>
                <h1 className="lg__heading  price">
                  {plan.price} <sub>/{plan.duration}</sub>
                </h1>
                <Link to={"/"} className="btn btn__buy">
                  Claim
                </Link>
              </div>

              <div className="plan__item__feature">
                <h1 className="sm__heading">Top Features</h1>
                <ul>
                  {plan.list.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Plan;
