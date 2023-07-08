import { useContext } from "react";
import { DataContext } from "../../context/dataContext";

const CategoryNav = () => {
  const { category } = useContext(DataContext);

  return (
    <ul>
      {category.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ul>
  );
};

export default CategoryNav;
