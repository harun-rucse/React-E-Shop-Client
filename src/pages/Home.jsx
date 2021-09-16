import React from 'react';
import Announcement from '../components/Announcement';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsLetter from '../components/NewsLetter';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <>
      <Announcement />
      <Header />
      <Slider />
      <CategoryList />
      <ProductList />
      <NewsLetter />
      <Footer />
    </>
  );
}
