'use client'
import React from "react";
import Hero from "../Hero";
import FlashSales from "../FlashSales";
import Category from "../Category";
import CategoryMusicBanner from "../CategoryMusicBanner";


const Home = () => {
  return (
    <>
      <Hero />
      <FlashSales/>
      <Category/>
      <CategoryMusicBanner/>
    </>
  );
};

export default Home;
