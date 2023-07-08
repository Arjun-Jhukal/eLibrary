import { useState } from "react";
import { DataContext } from "../context/dataContext";
import data from "../data.json";
import CategorySection from "../containers/CategorySection";
import NavItem from "../components/Navbar/NavItem";
const LandingPage = () => {
  const [book, setBooks] = useState(data.books);
  const [category, setCategory] = useState(data.category);

  return (
    <DataContext.Provider value={{ category, book }}>
      <NavItem />

      <CategorySection />
    </DataContext.Provider>
  );
};

export default LandingPage;
