import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Question from "../components/Question";
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Question />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
