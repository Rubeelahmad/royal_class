import React, { FC } from 'react'

import styles from './SideMenu.module.scss'; 
import Navigation from '@/components/Hero/Navigation';

interface Props {
    isMenuOpen: boolean,
    closeMenu: () => void
}
const SideMenu: FC<Props> = ( { isMenuOpen, closeMenu }) => {
  return (
    <>
   
      <div className={`${styles.overlay} ${isMenuOpen ? styles.show : ''}`} onClick={closeMenu}></div>
      <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={closeMenu}>×</button>
        <ul className={styles.menuItems}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><Navigation/></li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;

