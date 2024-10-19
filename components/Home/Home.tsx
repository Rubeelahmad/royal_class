'use client'
import React from "react";
import Hero from "../Hero";
import FlashSales from "../FlashSales";
import Category from "../Category";
import CategoryMusicBanner from "../CategoryMusicBanner";
import BestSellingProducts from "../BestSellingProducts";
import ExoploreOurProducts from "../ExoploreOurProducts";
import NewArrivals from "../NewArrivals";
import HelpAndSupportSection from "../HelpAndSupportSection";


const Home = () => {
  return (
    <>
      <Hero />
      <FlashSales/>
      <Category/>
      <BestSellingProducts/>
      <CategoryMusicBanner/>
      <ExoploreOurProducts/>
      <NewArrivals/>
      <HelpAndSupportSection/>
    </>
  );
};

export default Home;
