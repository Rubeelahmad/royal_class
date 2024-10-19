"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./NewArrivals.module.scss"
import Image from "next/image";
import newArrivalImg from './icons/image.png'

const NewArrivals = () => {
  
  return (
    <div className={`${styles.wrapBox}  `}>
      <div className="container py-4 md:py-6 ">
        <div className={styles.newArrivalsHeader}>
          <div className={styles.newArrivalsLabel}>
            <div className={styles.newArrivalslabelTag}></div>
            <p>Featured</p>
          </div>
          <div className={styles.newArrivalsHeading}>
            <h2>New Arrivals</h2>
          </div>
        </div>

        <div className={styles.newArrivalsCardsSection}>
        <Image src={newArrivalImg} alt="newArrivalImg"/>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
