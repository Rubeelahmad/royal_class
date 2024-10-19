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
             <ViewProductsBtn />
          </div>
        </div>
        <div className={styles.bestSalesCardsSection}>
          <div
            className={`no-scrollbar ${styles.bestSalesCards}`}
          >
            {products.map((product: Product, index: number) => (
              <div key={index} className="flex-shrink-0">
                <ProductCard product={product} cardType="sales" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
