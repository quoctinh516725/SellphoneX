import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useParams } from "react-router-dom";
import ProductSumary from "./sections/ProductSumary";
import { useGetProductByIdQuery } from "../../features/products/products.api";
import ProductDetailSection from "./sections/ProductDetailSection";
import Loading from "../../components/Loading";

const DetailProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(id);
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/products" },
    { name: product?.name, path: `/products/${product?.id}` },
  ];
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full sm:max-w-[1200px] mx-auto px-2 sm:px-4">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex gap-10">
        <ProductDetailSection product={product} />
        <ProductSumary product={product} />
      </div>
    </div>
  );
};

export default DetailProduct;
