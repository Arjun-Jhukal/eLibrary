import { useState } from "react";
import { DataContext } from "../context/dataContext";
import data from "../data.json";
import CategorySection from "../containers/CategorySection";
const LandingPage = () => {
  const [books, setBooks] = useState(data.books);
  const [category, setCategory] = useState(data.category);

  console.log(category);
  return (
    <DataContext.Provider value={{ category, books }}>
      <p>Arjun Jhukal</p>

      <CategorySection />
    </DataContext.Provider>
  );
};

export default LandingPage;
