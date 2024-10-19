'use client'
import React, { useState } from "react";
import styles from "./TopBar.module.scss";
import DropDownIcon from "../icons/DropDownIcon";

const TopBar = () => {
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!isMobileDropdownOpen); 
  };

  return (
    <div className={styles.wrapBox}>
      <div className="container">
        <div className={styles.topBar}>
          <div className={styles.noticeBox}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <strong>Shop Now!</strong>
          </div>

          <div className={styles.languageBox}onClick={toggleMobileDropdown}>
            English <DropDownIcon />
          </div>
      
          {isMobileDropdownOpen && (
            <div className={styles.mobileDropdownMenu}>
              <ul>
                <li>English</li>
                <li>Spanish</li>
                <li>French</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
