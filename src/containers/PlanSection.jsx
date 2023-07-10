import Plan from "../components/Plan/Plan";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const PlanSection = () => {
  return (
    <section className="plan section__gap">
      <div className="container">
        <SectionTitle title={"Choose Your Plan"} subTitle={"Get Access to all the Premium Features"} />
        <div className="row ">
          <Plan />
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
