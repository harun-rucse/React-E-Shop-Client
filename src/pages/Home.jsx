import React from 'react';
import CategoryList from '../components/CategoryList';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <CategoryList />
      <ProductList />
    </Layout>
  );
}
