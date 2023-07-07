import CategoryNavSingle from "../components/CategoryNavSingle/CategoryNavSingle";

const CategorySection = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className="category__nav">
              <button>Category</button>
              <ul className="category__nav__items">
                <CategoryNavSingle />
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
