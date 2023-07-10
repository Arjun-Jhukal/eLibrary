import { useContext } from "react";
import { DataContext } from "../../context/dataContext";

const CategoryNav = ({ onClick, activeCategory }) => {
  const { category } = useContext(DataContext);

  return (
    <ul>
      {category.map((category, index) => (
        <li key={index}>
          <button type="button" onClick={() => onClick({ category })} className={activeCategory.category === category ? "active" : ""}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryNav;
