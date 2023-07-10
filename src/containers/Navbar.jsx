import { Link } from "react-router-dom";
import NavItem from "../components/Navbar/NavItem";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import nepalLogo from "../assets/img/nepal-govt.png";
import nepalFlag from "../assets/img/WavingFlag.gif";
import InputField from "../components/InputField/InputField";
const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const focusSearch = useRef();

  useEffect(() => {
    focusSearch.current.focus();
  }, []);
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__logo">
            <Link to={"/"}>
              <img src={nepalLogo} alt="" />
            </Link>
          </div>
          <div className="header__company">
            <span>नेपाल सरकार</span>
            <h1 className="lg__heading ">नेपाल राष्ट्रीय पुस्तकालय </h1>
            <span>
              Binayaknagar-09, <br className="d-md-none" /> Kathmandu, Nepal
            </span>
          </div>
          <div className="header__flag">
            <img src={nepalFlag} alt="" />
          </div>
        </div>
        <nav className="navbar">
          <ul className="navbar__items">
            <NavItem />
          </ul>
          <div className="navbar__right">
            {menuStatus ? (
              <button className="burger d-md-none">
                <FaBars />
              </button>
            ) : (
              <button className="close__menu d-md-none">
                <AiOutlineClose />
              </button>
            )}
            <button type="button">
              <BsSearch />
            </button>
          </div>
          <div className="search__bar">
            <InputField
              fieldType={"input"}
              inputType={"search"}
              name={"search"}
              placeholder={"Search Keyword"}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              reference={focusSearch}
            />
            <button type="submit" className="btn btn__search">
              Search
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
