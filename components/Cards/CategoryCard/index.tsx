"use client";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./CategoryCard.module.scss";

import image1 from "./../../../app/images/categoryImg/category1.png";
import image2 from "../../../app/images/categoryImg/category2.png";
import image3 from "./../../../app/images/categoryImg/category3.png";
import image4 from "./../../../app/images/categoryImg/category4.png";
import image5 from "./../../../app/images/categoryImg/category5.png";
import image6 from "./../../../app/images/categoryImg/category6.png";


import { setRandomImage } from "@/utils/Helpers/HelperFunctions";
import { Category } from "@/store/slices/categoriesSlice";


interface CategoryProps {
  category: Category;
  cardType: string;
}
const CategoryCard: FC<CategoryProps> = ({ category  }) => {
    const categryImages = [image1, image2, image3, image4, image5, image6 , image2, image5 ];
    const randomCategoryImage = setRandomImage(categryImages)
    const categoryImg = category && category.image || randomCategoryImage
   
  return (
    <div className={`${styles.categoryCard}`}>
    <div className={styles.cardContent}>
      <Image src={categoryImg} alt="" width={80} height={60} />
      <div className={styles.categoryName}>{category.name}</div>
    </div>
  </div>
  );
};

export default CategoryCard;
