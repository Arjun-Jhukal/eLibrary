import { useState, useEffect } from "react";
import BookSingle from "../components/Book/BookSingle";
import CategoryNavSingle from "../components/CategoryNavSingle/CategoryNavSingle";

const CategorySection = () => {
  const [category, setCategory] = useState({ category: "fiction" });

  const [activeCategory, setActiveCategory] = useState(category);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setActiveCategory(selectedCategory);
  };

  return (
    <div className="category">
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 col-12">
            <div className="category__nav">
              <button>Category</button>
              <CategoryNavSingle onClick={(currentCategory) => handleCategoryChange(currentCategory)} activeCategory={activeCategory} />
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <div className="row">
              <BookSingle category={category} number={6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
