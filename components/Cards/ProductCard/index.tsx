"use client";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./ProductCard.module.scss";

import ColouredRatingStart from "./icons/ColouredRatingStart";
import NonColuredRatingStar from "./icons/NonColuredRatingStar";
import HeartIcon from "./icons/HeartIcon";
import EyeIcon from "./icons/EyeIcon";
import image2 from "./../../../app/images/productsImg/product2.png";
import image3 from "./../../../app/images/productsImg/product3.png";
import image4 from "./../../../app/images/productsImg/product4.png";
import image5 from "./../../../app/images/productsImg/product5.png";
import image6 from "./../../../app/images/productsImg/product6.png";
import image7 from "./../../../app/images/productsImg/product7.png";
import image8 from "./../../../app/images/productsImg/product8.png";
import image9 from "./../../../app/images/productsImg/product9.png";
import image10 from "./../../../app/images/productsImg/product10.png";
import image11 from "./../../../app/images/productsImg/product11.png";

import { setRandomImage } from "@/utils/Helpers/HelperFunctions";
import { Product } from "@/store/slices/productsSlice";




interface Props {
  product: Product;
  cardType?: string;
 
}
const ProductCard: FC<Props> = ({ product }) => {
    const productImages = [ image2, image3, image4, image5, image6, image7, image8, image9,image10,image11 ];
    const randomProductImage = setRandomImage(productImages)

    const productImg = product && product.images[1] || randomProductImage
    const discount = (product.price * 15) / 100 //Lets give Everyone 15% discount
    const discountedPrice = product.price - discount;
    
  return (
    <div className={`${styles.productCard}`}>
      <div className={styles.contentSection}>
        <div className={styles.discountBadge}>{discount}</div>
        <div className={styles.iconButtons}>
          <button className={styles.iconButton}>
            <HeartIcon />
          </button>
          <button className={styles.iconButton}>
            <EyeIcon />
          </button>
        </div>

        <div className={styles.productImg}>
          <Image src={productImg} alt={product?.name || '' } width={140} height={120} />
        </div>

        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>

      <div className={styles.cardDetailsSection}>
        <h3 className={`truncate-text ${styles.productName}`}>{product.title}</h3>
        <div className={styles.priceSection}>
          <span className={styles.currentPrice}>{discountedPrice}</span>
          <span className={styles.originalPrice}>{product.price}</span>
        </div>
        <div className={styles.ratingSection}>
          <span className={styles.rating}>
            <ColouredRatingStart />
            <ColouredRatingStart />
            <ColouredRatingStart />
            <ColouredRatingStart />
            <NonColuredRatingStar />
          </span>
          <span className={styles.ratingCount}>({product.price})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
