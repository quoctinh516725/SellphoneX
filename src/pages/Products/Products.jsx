import React from "react";
import { useGetProductsQuery } from "../../features/products/products.api";
import { useDispatch, useSelector } from "react-redux";
import useFilter from "../../hooks/useFilter";
import { setPriceRange } from "../../features/products/products.slice";
import Button from "../../components/Button";
import CardProduct from "../../components/CardProduct";
import Loading from "../../components/Loading";
import Breadcrumbs from "./sections/Breadcrumbs";
import Banner from "./sections/Banner";
import BrandSection from "./sections/BrandSection";
import { assets } from "../../assets";
import UsageFilter from "./sections/UsageFilter";
import DealSection from "./sections/DealSection";
import SortSection from "./sections/SortSection";

const paths = [
  { name: "Trang chủ", path: "/" },
  { name: "Sản phẩm", path: "/products" },
];

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, isLoading } = useGetProductsQuery();
  const { selectedProduct, priceRange, useProduct, searchKey, brandProduct } =
    useSelector((store) => store.products);

  const filteredProduct = useFilter({
    products,
    selectedProduct,
    priceRange,
    useProduct,
    searchKey,
    brandProduct,
  });
  const saleProducts = filteredProduct?.filter(
    (p) => p.isSale && p.category === "phone"
  );
  console.log(filteredProduct);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full sm:max-w-[1200px] mx-auto px-2">
      <Breadcrumbs paths={paths} />
      <Banner />
      <BrandSection brands={assets.brands} title="Điện thoại" />
      <UsageFilter
        phoneFeatures={assets.phoneFeatures}
        title="Chọn theo nhu cầu"
      />
      <DealSection products={saleProducts} />
      <SortSection />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-4">
        {filteredProduct?.map((product) => (
          <CardProduct key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
