import SectionTitle from "../components/SectionTitle/SectionTitle";
import ServiceSingle from "../components/Services/ServiceSingle";

const ServiceSection = () => {
  return (
    <div className="service">
      <div className="container">
        <SectionTitle title={"Our Services"} subTitle={"We are known for the quality service"} />
        <div className="row">
          <ServiceSingle />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
