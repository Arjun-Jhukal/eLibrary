import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { BsBook } from "react-icons/bs";
import { FaFileAudio, FaUserTie } from "react-icons/fa";
import { RiTakeawayFill } from "react-icons/ri";
const ServiceSingle = () => {
  const { service } = useContext(DataContext);

  const icons = [<FaFileAudio />, <RiTakeawayFill />, <BsBook />, <FaUserTie />];
  return (
    <>
      {service.map((item, index) => {
        return (
          <div className="col-lg-3 col-6" key={index}>
            <div className="service__item">
              <div className="icon">{icons[index]}</div>
              <div className="text">
                <h1 className="md__heading">{item.title}</h1>
                <p>{item.brief}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServiceSingle;
