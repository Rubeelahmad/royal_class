'use client'
import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.scss"; // Assuming SCSS module is imported
import FavouriteIcon from "../icons/FavouriteIcon";
import CartIcon from "../icons/CartIcon";
import SearchIcon from "../icons/SearchIcon";
import SideMenu from "../MobileNavBar/SideMenue";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("Search...");

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  useEffect(() => {
    const updatePlaceholder = () => {
      setPlaceholderText(window.innerWidth >= 768 ? "What are you looking for?" : "Search...");
    };
    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);
  return (
    <div className={styles.wrapBox}>
      <div className="container">
        <div className={styles.navBar}>
          <div className={styles.logo}>Royal Class</div>

          {/* Desktop Nav Items */}
          <div className={styles.nav}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
          </div>

          
          <div className={styles.actions}>
            <div className={styles.searchBar}>
              <input type="text" placeholder={placeholderText} />
              <button className={styles.searchBtn}><SearchIcon/></button>
            </div>
            <div className={styles.actionBtns}>
              <FavouriteIcon /> 
              <CartIcon  /> 
            </div>

            {/* Hamburger Icon for mobile */}
            <div className={styles.hamburger} onClick={toggleMenu}>
              ☰
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav (Side Modal) */}
           {/* Side Menu */}
           <SideMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

    </div>
  );
};

export default NavBar;
