import React from 'react';
import Announcement from './Announcement';
import Footer from './Footer';
import Header from './Header';
import NewsLetter from './NewsLetter';

export default function Layout({ children }) {
  return (
    <>
      <Announcement />
      <Header />
      {children}
      <NewsLetter />
      <Footer />
    </>
  );
}
