import BookSingle from "../components/Book/BookSingle";
import CategoryNavSingle from "../components/CategoryNavSingle/CategoryNavSingle";

const CategorySection = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className="category__nav">
              <button>Category</button>
              <CategoryNavSingle />
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <div className="row">
              <BookSingle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
