import { createContext } from "react";
import { assets } from "../assets";
const products = assets.products;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const value = { products };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
