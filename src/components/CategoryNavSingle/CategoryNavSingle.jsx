import { useContext } from "react";
import { DataContext } from "../context/dataContext";
const CategoryNav = () => {
  const { categoryList } = useContext(DataContext);
  return (
    <ul>
      {categoryList.map((category, index) => {
        return <li key={index}>{category}</li>;
      })}
    </ul>
  );
};

export default CategoryNav;
