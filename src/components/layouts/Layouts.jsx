import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../../styles/GlobalStyles';

export default function Layouts({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
