import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/dataContext";
const NavItem = () => {
  const { navItem } = useContext(DataContext);
  return (
    <>
      {navItem.map((item, index) => {
        return (
          <li key={index}>
            <Link to={`${item.link}`}>{item.item}</Link>
          </li>
        );
      })}
    </>
  );
};

export default NavItem;
