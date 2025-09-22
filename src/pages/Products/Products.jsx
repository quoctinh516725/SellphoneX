import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../features/products/products.api";
import { useDispatch, useSelector } from "react-redux";
import useFilter from "../../hooks/useFilter";
import CardProduct from "../../components/CardProduct";
import Loading from "../../components/Loading";
import Breadcrumbs from "../../components/Breadcrumbs";
import Banner from "./sections/Banner";
import BrandSection from "./sections/BrandSection";
import { assets } from "../../assets";
import FeatureFilter from "./sections/FeatureFilter";
import DealSection from "./sections/DealSection";
import SortSection from "./sections/SortSection";
import ListFilter from "./sections/Filtering";

const paths = [
  { name: "Trang chủ", path: "/" },
  { name: "Sản phẩm", path: "/products" },
];

const productsType = {
  phone: {
    title: "Điện thoại",
    banners: assets.phoneBanners,
    brands: assets.phoneBrands,
    features: assets.phoneFeatures,
  },

  laptop: {
    title: "Laptop",
    banners: assets.laptopBanners,
    brands: assets.laptopBrands,
    features: assets.laptopFeatures,
  },

  tablet: {
    title: "Máy tính bảng",
    banners: assets.tabletBanners,
    brands: assets.tabletBrands,
    features: assets.tabletFeatures,
  },

  watch: {
    title: "Đồng hồ",
    banners: assets.watchBanners,
    brands: assets.watchBrands,
    features: assets.watchFeatures,
  },

  headphone: {
    title: "Tai nghe",
    banners: assets.headphoneBanners,
    brands: assets.headphoneBrands,
    features: assets.headphoneFeatures,
  },
};

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const { selectedProduct, priceRange, useProduct, searchKey, brandProduct } =
    useSelector((store) => store.products);

  const saleProducts = products?.filter(
    (p) => p.isSale && p.category === selectedProduct
  );

  const productPageData = productsType[selectedProduct];
  const { title, banners, brands, features } = productPageData;

  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/products" },
    { name: title, path: `/products` },
  ];

  const filters = {
    selectedProduct,
    priceRange,
    useProduct,
    searchKey,
    brandProduct,
  };

  const filteredProduct = useFilter({
    ...filters,
    products,
  });



  useEffect(() => {
    localStorage.setItem("selectedProduct", selectedProduct);
  }, [selectedProduct]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full sm:max-w-[1200px] mx-auto px-2">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Banner banners={banners} />
      {saleProducts.length > 0 && <DealSection products={saleProducts} />}
      <BrandSection brands={brands} title={title} />
      <FeatureFilter phoneFeatures={features} title="Chọn theo nhu cầu" />

      <ListFilter {...filters} />
      <SortSection />
      {filteredProduct?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-4">
          {filteredProduct?.map((product) => (
            <CardProduct key={product.id} item={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 mt-10">
          <img className="w-40" src="/empty-icon.svg" alt="" />
          <p className="text-gray-500 text-lg sm: text-2xl font-semibold">
            Không tìm thấy sản phẩm phù hợp!
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
