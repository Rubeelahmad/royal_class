"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./FlashSales.module.scss";
import LeftArrowIcon from "../../utils/SliderIcons/Arrow_Icon/LeftArrowIcon";
import RightArrowIcon from "../../utils/SliderIcons/Arrow_Icon/RightArrowIcon";
import { useSelector } from "react-redux";
import { Product, fetchProducts } from "../../store/slices/productsSlice";
import { RootState, useAppDispatch } from "@/store";
import ViewProductsBtn from "../Buttons/ViewProductsButton";
import Loader from "../Loader";
import ProductCard from "../Cards/ProductCard";

const FlashSales = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false); // Handle viewAll state here
  const sliderRef = useRef<any>(null);

  const dispatch = useAppDispatch();
  const { products, loading: productsLoading } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (productsLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleNextClick = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const toggleView = () => {
    setViewAll(!viewAll);
  };

  return (
    <div className={`${styles.wrapBox}  `}>
      <div className="container border-b-[1px] border-b-primary/10  py-4 md:py-6 ">
        <div className={styles.flashSalesHeader}>
          <div className={styles.salesLabel}>
            <div className={styles.saleslabelTag}></div>
            <p>Today’s</p>
          </div>
          <div className={styles.salesHeading}>
            <h2>Flash Sales</h2>
            <div className={styles.dayTime}>
              <ul>
                <li className={styles.dayTimeCol}>
                  <h3>Day</h3>
                  <h3>03</h3>
                </li>
                <h4>:</h4>
                <li className={styles.dayTimeCol}>
                  <h3>Hours</h3>
                  <h3>23</h3>
                </li>
                <h4>:</h4>
                <li className={styles.dayTimeCol}>
                  <h3>Minutes</h3>
                  <h3>19</h3>
                </li>
                <h4>:</h4>
                <li className={styles.dayTimeCol}>
                  <h3>Seconds</h3>
                  <h3>56</h3>
                </li>
              </ul>
            </div>
            <div className={styles.arrowActions}>
              <div className={styles.arrowCircle} onClick={handlePrevClick}>
                <LeftArrowIcon />
              </div>
              <div className={styles.arrowCircle} onClick={handleNextClick}>
                <RightArrowIcon />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.flashSalesCardsSection}>
          <div
            ref={sliderRef}
            className={`no-scrollbar gap-4 ${
              viewAll
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
                : "flex overflow-x-auto "
            }`}
          >
            {viewAll
              ? products.slice(0, 11).map((product: Product, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-center flex-shrink-0  gap-4"
                  >
                    <ProductCard product={product} />
                  </div>
                ))
              : products.map((product: Product, index: number) => (
                  <div key={index} className="flex-shrink-0">
                    <ProductCard product={product} cardType="sales" />
                  </div>
                ))}
          </div>
        </div>

        <ViewProductsBtn viewAll={viewAll} toggleView={toggleView} />
      </div>
    </div>
  );
};

export default FlashSales;
