"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Category.module.scss";
import LeftArrowIcon from "../../utils/SliderIcons/Arrow_Icon/LeftArrowIcon";
import RightArrowIcon from "../../utils/SliderIcons/Arrow_Icon/RightArrowIcon";
import { useSelector } from "react-redux";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import { RootState, useAppDispatch } from "@/store";
import Loader from "../Loader";
import CategoryCard from "../Cards/CategoryCard";


const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<any>(null);

  const dispatch = useAppDispatch();
  const { categories, loading: categoriesLoading } = useSelector(
    (state: RootState) => state.categories
  );

  console.log('categories:::' ,categories)
  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  if (categoriesLoading) {
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
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1);
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.wrapBox}  `}>
      <div className="container border-b-[1px] border-b-primary/10  py-4 md:py-8 ">
        <div className={styles.Header}>
          <div className={styles.Label}>
            <div className={styles.labelTag}></div>
            <p>Categories</p>
          </div>
          <div className={styles.Heading}>
            <h2>Browse By Category</h2>
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
        <div className={styles.CardsSection}>
          <div
            className={`no-scrollbar ${styles.Cards}`}
            ref={sliderRef}
          >
            {categories.map((category: any, index: number) => (
              <div key={index} className="flex-shrink-0">
                <CategoryCard category={category} cardType="category" /> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
