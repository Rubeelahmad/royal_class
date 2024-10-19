"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./BestSellingProducts.module.scss";
import LeftArrowIcon from "../../utils/SliderIcons/Arrow_Icon/LeftArrowIcon";
import RightArrowIcon from "../../utils/SliderIcons/Arrow_Icon/RightArrowIcon";
import { useSelector } from "react-redux";
import { Product, fetchProducts } from "../../store/slices/productsSlice";
import { RootState, useAppDispatch } from "@/store";
import ViewProductsBtn from "../Buttons/ViewProductsButton";
import Loader from "../Loader";
import ProductCard from "../Cards/ProductCard";

const BestSellingProducts = () => {
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

  const toggleView = () => {
    setViewAll(!viewAll);
  };

  return (
    <div className={`${styles.wrapBox}  `}>
      <div className="container border-b-[1px] border-b-primary/10  py-4 md:py-6 ">
        <div className={styles.bestSalesHeader}>
          <div className={styles.salesLabel}>
            <div className={styles.saleslabelTag}></div>
            <p>This Month</p>
          </div>
          <div className={styles.salesHeading}>
            <h2>Best Selling Products</h2>
            <ViewProductsBtn viewAll={viewAll} toggleView={toggleView} />
          </div>
        </div>

        <div className={styles.bestSalesCardsSection}>
          <div
            className={`no-scrollbar gap-4 ${
              viewAll
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
                : "flex overflow-x-auto "
            }`}
          >
            {viewAll
              ? products.slice(0, 7).map((product: Product, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-center flex-shrink-0  gap-4"
                  >
                    <ProductCard product={product} cardType="bestSelling"/>
                  </div>
                ))
              : products.slice(0, 4).map((product: Product, index: number) => (
                  <div key={index} className="flex flex-shrink-0 gap-4">
                    <ProductCard product={product} cardType="bestSelling"/>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
