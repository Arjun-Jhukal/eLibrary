import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { Link } from "react-router-dom";

const BookSingle = ({ category, number }) => {
  const currentCategory = category.category;

  const { book } = useContext(DataContext);

  const filteredBooks = book.filter((item) => {
    return item.category === currentCategory;
  });

  return (
    <>
      {filteredBooks &&
        filteredBooks.slice(0, number).map((item, index) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-6" key={index}>
              <div className="book">
                <div className="book__image">
                  <img src={item.image} alt={item.title} />

                  <div className="book__hover">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsam?</p>
                  </div>
                </div>
                <div className="book__text">
                  <span>{item.category}</span>
                  <h1 className="sm__heading">{item.title}</h1>
                  {item.status === "free" ? (
                    <Link to={"/"} className="btn btn__free">
                      Read Online
                    </Link>
                  ) : (
                    <Link to={"/"} className="btn btn__paid">
                      Buy Subscription
                    </Link>
                  )}
                </div>

                <div className="book__status">{item.status}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default BookSingle;
