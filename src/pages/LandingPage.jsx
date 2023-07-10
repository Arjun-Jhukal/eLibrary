import { useState } from "react";
import { DataContext } from "../context/dataContext";
import data from "../data.json";
import CategorySection from "../containers/CategorySection";

import PlanSection from "../containers/PlanSection";
import Cta from "../components/Cta/Cta";
import ServiceSection from "../containers/ServiceSection";
import Navbar from "../containers/Navbar";
const LandingPage = () => {
  const [book, setBooks] = useState(data.books);
  const [category, setCategory] = useState(data.category);
  const [plan, setPlan] = useState(data.plans);
  const [service, setService] = useState(data.services);
  const [navItem, setNavItem] = useState(data.menuItem);

  return (
    <DataContext.Provider value={{ category, book, plan, service, navItem }}>
      <Navbar />

      <CategorySection />
      <ServiceSection />
      <PlanSection />
      <Cta />
    </DataContext.Provider>
  );
};

export default LandingPage;
