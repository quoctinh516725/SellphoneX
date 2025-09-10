import Banner from "./sections/Banner";
import Filter from "./sections/Filter";
import SaleSection from "./sections/SaleSection";
import Blog from "./sections/Blog";
import { useGetProductsQuery } from "../../features/products/products.api";
import ProductSection from "./sections/ProductSection";
import { data } from "react-router-dom";
import EventBanner from "./sections/EventBanner";
import { assets } from "../../assets";

const Home = () => {
  const { data: products = [] } = useGetProductsQuery();
  return (
    <>
      <Filter />
      <Banner />
      <SaleSection products={products} />
      <ProductSection
        products={products}
        title={"Điện thoại nổi bật nhất"}
        category="phone"
        brands={["Apple", "Samsung", "Xiaomi", "Oppo", "Realme"]}
      />
      <ProductSection
        products={products}
        title={"Laptop"}
        category="laptop"
        brands={["Macbook", "ASUS", "Lenovo", "Aser", "Dell", "HP"]}
      />
      <ProductSection
        products={products}
        title={"Màn hình, máy tính để bàn"}
        category="screen"
        brands={["PC Gaming", "PC Đồ hoạ", "PC Đồng bộ", "Màn hình Gaming"]}
      />
      <ProductSection
        products={products}
        title={"Máy tính bảng"}
        category="tablet"
        brands={[
          "iPad Pro M4 2024",
          "Tab S10 Series",
          "Xiaomi",
          "Huawei",
          "Samsung",
          "TCL",
          "Lenovo",
        ]}
      />
      <ProductSection
        products={products}
        title={"Đồng hồ thông minh"}
        category="watch"
        brands={["Apple Watch", "Samsung", "Huawei", "Xiaomi", "Amazfit"]}
      />
      <ProductSection
        products={products}
        title={"Tai nghe"}
        category="headphone"
        brands={[
          "Tai nghe Bluetooth",
          "Tai nghe không dây",
          "Tai nghe Gaming",
          "Loa Bluetooth",
          "Loa Karaoke",
        ]}
      />
      <EventBanner items={assets.studentBanner} title={"Ưu đãi sinh viên"} />
      <EventBanner items={assets.bankBanner} title={"Ưu đãi thanh toán"} />
      <EventBanner
        items={assets.brandBanner}
        title={"Chuyên trang thương hiệu"}
      />
      <EventBanner items={assets.blogBanner} title={"Tin công nghệ"} />
    </>
  );
};

export default Home;
