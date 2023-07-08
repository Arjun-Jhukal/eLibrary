import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { Link } from "react-router-dom";

const BookSingle = () => {
  const { book } = useContext(DataContext);
  // console.log(book);
  return (
    <>
      {book.slice(0, 6).map((item, index) => {
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
