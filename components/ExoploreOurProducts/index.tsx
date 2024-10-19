"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ExoploreOurProducts.module.scss";
import LeftArrowIcon from "../../utils/SliderIcons/Arrow_Icon/LeftArrowIcon";
import RightArrowIcon from "../../utils/SliderIcons/Arrow_Icon/RightArrowIcon";
import { useSelector } from "react-redux";
import { Product, fetchProducts } from "../../store/slices/productsSlice";
import { RootState, useAppDispatch } from "@/store";
import ViewProductsBtn from "../Buttons/ViewProductsButton";
import Loader from "../Loader";
import ProductCard from "../Cards/ProductCard";

const ExoploreOurProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<any>(null);
  const [viewAll, setViewAll] = useState(false); 

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
            <p>Our Products</p>
          </div>
          <div className={styles.salesHeading}>
            <h2>Explore Our Products</h2>
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
            className={`no-scrollbar ${styles.flashSalesCards}`}
            ref={sliderRef}
          >
            {products.slice(0, 8).map((product: Product, index: number) => (
              <div key={index} className="flex-shrink-0">
                <ProductCard product={product} cardType="sales" />
              </div>
            ))}
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
              ? products.slice(0, 10).map((product: Product, index: number) => (
                  <div key={index} className="flex items-center justify-center flex-shrink-0  gap-4">
                    <ProductCard product={product} />
                  </div>
                ))
              : products.slice(0, 4).map((product: Product, index: number) => (
                  <div key={index} className="flex flex-shrink-0 gap-4">
                    <ProductCard product={product} />
                  </div>
                ))}
          </div>
        </div>

        <ViewProductsBtn viewAll={viewAll} toggleView={toggleView} />

      </div>
    </div>
  );
};

export default ExoploreOurProducts;
