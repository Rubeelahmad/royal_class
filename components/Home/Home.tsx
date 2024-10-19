'use client'
import React from "react";
import Hero from "../Hero";
import FlashSales from "../FlashSales";
import Category from "../Category";
import CategoryMusicBanner from "../CategoryMusicBanner";
import BestSellingProducts from "../BestSellingProducts";
import ExoploreOurProducts from "../ExoploreOurProducts";


const Home = () => {
  return (
    <>
      <Hero />
      <FlashSales/>
      <Category/>
      <BestSellingProducts/>
      <CategoryMusicBanner/>
      <ExoploreOurProducts/>
    </>
  );
};

export default Home;
