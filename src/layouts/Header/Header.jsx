import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Search from "../../components/Search";
import Modal from "../../components/Modal";
import Backdrop from "../../components/Backdrop";
import TopHeader from "./TopHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrandProduct,
  setPriceRange,
  setSearchKey,
  setSelectedProduct,
  setUseProduct,
} from "../../features/products/products.slice";
import { useGetCategoriesQuery } from "../../features/categories/categoryes.api";

const subCategories = [
  {
    id: "64xxx",
    categoryId: 1,
    subCategory: [
      {
        id: "1-0",
        label: "Thương hiệu thiết bị",
        type: "brand",
        options: [
          { id: "1-0-0", label: "Apple", value: "apple" },
          { id: "1-0-1", label: "Samsung", value: "samsung" },
          { id: "1-0-2", label: "Xiaomi", value: "xiaomi" },
          { id: "1-0-3", label: "Oppo", value: "oppo" },
          { id: "1-0-4", label: "Realme", value: "realme" },
          { id: "1-0-5", label: "Vivo", value: "vivo" },
          { id: "1-0-6", label: "Nokia", value: "nokia" },
        ],
      },
      {
        id: "1-1",
        label: "Mức giá",
        type: "price",
        options: [
          { id: "1-1-0", label: "Dưới 2 triệu", value: [0, 2000000] },
          { id: "1-1-1", label: "2 - 4 triệu", value: [2000000, 4000000] },
          { id: "1-1-2", label: "4 - 7 triệu", value: [4000000, 7000000] },
          { id: "1-1-3", label: "7 - 13 triệu", value: [7000000, 13000000] },
          { id: "1-1-4", label: "13 - 20 triệu", value: [13000000, 20000000] },
          { id: "1-1-5", label: "Trên 20 triệu", value: [20000000, Infinity] },
        ],
      },
      {
        id: "1-2",
        label: "Nhu cầu sử dụng",
        type: "use",
        options: [
          { id: "1-2-0", label: "Chụp hình đẹp", value: "camera" },
          { id: "1-2-1", label: "Chơi game / Cấu hình cao", value: "gaming" },
          { id: "1-2-2", label: "Pin khủng trên 5000 mAh", value: "pin" },
        ],
      },
    ],
  },
  {
    id: "65xxx",
    categoryId: 2,
    subCategory: [
      {
        id: "2-0",

        label: "Thương hiệu thiết bị",
        type: "brand",
        options: [
          { id: "2-0-0", label: "Apple (iPad)", value: "apple" },
          { id: "2-0-1", label: "Samsung", value: "samsung" },
          { id: "2-0-2", label: "Xiaomi", value: "xiaomi" },
          { id: "2-0-3", label: "Lenovo", value: "lenovo" },
          { id: "2-0-4", label: "Huawei", value: "huawei" },
        ],
      },
      {
        id: "2-1",
        label: "Mức giá",
        type: "price",
        options: [
          { id: "2-1-0", label: "Dưới 5 triệu", value: [0, 5000000] },
          { id: "2-1-1", label: "5 - 10 triệu", value: [5000000, 10000000] },
          { id: "2-1-2", label: "10 - 15 triệu", value: [10000000, 15000000] },
          { id: "2-1-3", label: "Trên 15 triệu", value: [15000000, Infinity] },
        ],
      },
      {
        id: "2-2",
        label: "Nhu cầu sử dụng",
        type: "use",
        options: [
          { id: "2-2-0", label: "Chơi game / Cấu hình cao", value: "gaming" },
          { id: "2-2-1", label: "Nghe nhạc", value: "music" },
          { id: "2-2-2", label: "Học tập", value: "study" },
          { id: "2-2-3", label: "Vẽ / Ghi chú bằng bút", value: "writing" },
        ],
      },
    ],
  },
  {
    id: "64xxx",
    categoryId: 3,
    subCategory: [
      {
        id: "3-0",
        label: "Thương hiệu thiết bị",
        type: "brand",
        options: [
          { id: "3-0-0", label: "Apple", value: "apple" },
          { id: "3-0-1", label: "Dell", value: "dell" },
          { id: "3-0-2", label: "HP", value: "hp" },
          { id: "3-0-3", label: "Asus", value: "asus" },
          { id: "3-0-4", label: "Lenovo", value: "lenovo" },
          { id: "3-0-5", label: "MSI", value: "msi" },
          { id: "3-0-6", label: "Acer", value: "acer" },
        ],
      },
      {
        id: "3-1",
        label: "Mức giá",
        type: "price",
        options: [
          { id: "3-1-0", label: "Dưới 10 triệu", value: [0, 10000000] },
          { id: "3-1-1", label: "10 - 15 triệu", value: [10000000, 15000000] },
          { id: "3-1-2", label: "15 - 20 triệu", value: [15000000, 20000000] },
          { id: "3-1-3", label: "20 - 30 triệu", value: [20000000, 30000000] },
          { id: "3-1-4", label: "Trên 30 triệu", value: [30000000, Infinity] },
        ],
      },
      {
        id: "3-2",
        label: "Nhu cầu sử dụng",
        type: "use",
        options: [
          { id: "3-2-0", label: "Học tập - Văn phòng", value: "office" },
          { id: "3-2-1", label: "Đồ hoạ - Thiết kế", value: "design" },
          { id: "3-2-2", label: "Gaming", value: "gaming" },
          { id: "3-2-3", label: "Mỏng nhẹ - Thời trang", value: "thin-light" },
        ],
      },
    ],
  },
  {
    id: "64xxx",
    categoryId: 4,
    subCategory: [
      {
        id: "4-0",

        label: "Thương hiệu thiết bị",
        type: "brand",
        options: [
          { id: "4-0-0", label: "Apple Watch", value: "apple" },
          { id: "4-0-1", label: "Samsung", value: "samsung" },
          { id: "4-0-2", label: "Garmin", value: "garmin" },
          { id: "4-0-3", label: "Huawei", value: "huawei" },
          { id: "4-0-4", label: "Xiaomi", value: "xiaomi" },
        ],
      },
      {
        id: "4-1",
        label: "Mức giá",
        type: "price",
        options: [
          { id: "4-1-0", label: "Dưới 2 triệu", value: [0, 2000000] },
          { id: "4-1-1", label: "2 - 5 triệu", value: [2000000, 5000000] },
          { id: "4-1-2", label: "5 - 10 triệu", value: [5000000, 10000000] },
          { id: "4-1-3", label: "Trên 10 triệu", value: [10000000, Infinity] },
        ],
      },
      {
        id: "4-2",
        label: "Nhu cầu sử dụng",
        type: "use",
        options: [
          { id: "4-2-0", label: "Thời trang", value: "fashion" },
          { id: "4-2-1", label: "Theo dõi sức khoẻ", value: "health" },
          { id: "4-2-2", label: "Thể thao - GPS", value: "sport" },
          { id: "4-2-3", label: "Nghe gọi / Thông báo", value: "notification" },
        ],
      },
    ],
  },
  {
    id: "64xxx",
    categoryId: 5,
    subCategory: [
      {
        id: "5-0",

        label: "Thương hiệu thiết bị",
        type: "brand",
        options: [
          { id: "5-0-0", label: "Apple (AirPods)", value: "apple" },
          { id: "5-0-1", label: "Sony", value: "sony" },
          { id: "5-0-2", label: "Samsung", value: "samsung" },
          { id: "5-0-3", label: "JBL", value: "jbl" },
          { id: "5-0-4", label: "Sennheiser", value: "sennheiser" },
          { id: "5-0-5", label: "Razer", value: "razer" },
        ],
      },
      {
        id: "5-1",
        label: "Mức giá",
        type: "price",
        options: [
          { id: "5-1-0", label: "Dưới 1 triệu", value: [0, 1000000] },
          { id: "5-1-1", label: "1 - 2 triệu", value: [1000000, 2000000] },
          { id: "5-1-2", label: "2 - 5 triệu", value: [2000000, 5000000] },
          { id: "5-1-3", label: "Trên 5 triệu", value: [5000000, Infinity] },
        ],
      },
      {
        id: "5-2",
        label: "Nhu cầu sử dụng",
        type: "use",
        options: [
          { id: "5-2-0", label: "Nghe nhạc", value: "music" },
          { id: "5-2-1", label: "Gaming", value: "gaming" },
          { id: "5-2-2", label: "Chống ồn chủ động (ANC)", value: "anc" },
          { id: "5-2-3", label: "Thể thao / Chạy bộ", value: "sport" },
        ],
      },
    ],
  },
];

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { data: categories, isLoading } = useGetCategoriesQuery();

  const [isOpen, setIsOpen] = useState({
    category: false,
    user: false,
    subCategories: false,
  });
  const [categoryId, setCategoryId] = useState(1);
  const [search, setSearch] = useState("");
  // Check
  const isLogin = true;

  function handleOpen(e) {
    const clickedMenu = e.currentTarget.name;

    setIsOpen((prevState) => {
      const newState = {
        category: false,
        user: false,
      };

      if (!prevState[clickedMenu]) {
        newState[clickedMenu] = true;
      }

      return newState;
    });
  }

  function handleClose() {
    setIsOpen({
      category: false,
      user: false,
      subCategories: false,
    });
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleFilterSubcategory(item, type) {
    const category = categories?.find((cate) => cate.id === categoryId);
    switch (type) {
      case "price":
        dispatch(setPriceRange(item.value));
        break;
      case "use":
        dispatch(setUseProduct(item.value));
        break;
      case "brand":
        dispatch(setBrandProduct(item.value));
        break;
      default:
        break;
    }
    dispatch(setSelectedProduct(category.name));
    navigate("/products");
    handleClose();
  }

  return (
    <>
      <header className="bg-[linear-gradient(180deg,#e45464_13%,#d70018)] sticky -top-6 z-50">
        <TopHeader />
        <section className=" max-w-[1200px] mx-auto  flex justify-between items-center px-2 sm:px-4 py-2 pb-4 gap-4">
          {/* Logo */}
          <div>
            <Link className="flex items-center " to="/">
              <span className="hidden lg:block text-2xl text-white logo-font ">
                Sellphone
              </span>
              <img
                className="w-12 sm:w-8 p-0.5 border border-white/30"
                src="/logo.png"
                alt=""
              />
            </Link>
          </div>

          <div className="flex sm:flex-row-reverse items-center gap-5  ">
            {/* Search */}
            <Search
              placeholder={"Bạn muốn mua gì?"}
              name={"search"}
              value={search}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch(setSearchKey(search));
                  navigate("/products");
                  handleClose();
                }
              }}
              onChange={handleSearch}
              className={"sm:w-96 w-full"}
            />{" "}
            {/* Fillter */}
            <div className="hidden lg:flex relative  items-center gap-4 text-nowrap">
              <Button name={"category"} onClick={handleOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <span>Danh mục</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 duration-300 ${
                    isOpen.category ? "-rotate-90 " : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Button>

              <Modal isOpen={isOpen.category}>
                <div className="flex flex-col gap-4">
                  {categories?.map((item, index) => (
                    <div
                      className="relative flex items-center gap-2 cursor-pointer "
                      onMouseEnter={() => {
                        setCategoryId(item.id);
                        setIsOpen({
                          ...isOpen,
                          subCategories: true,
                        });
                      }}
                      onClick={() => {
                        dispatch(setSelectedProduct(item.name));
                        navigate("/products");
                        handleClose();
                      }}
                      key={item.id}
                    >
                      <img className="w-10" src={item.img} alt="" />
                      <span className="text-sm">{item.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 ml-auto -rotate-90 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </Modal>
              <Modal
                isOpen={isOpen.subCategories}
                className={"left-76 min-w-[650px]"}
              >
                <div className=" grid grid-cols-3 gap-4">
                  {subCategories
                    ?.find((sub) => sub.categoryId === categoryId)
                    ?.subCategory?.map((sub) => (
                      <div
                        className="flex flex-col gap-3 cursor-pointer "
                        key={sub.id}
                      >
                        <h5 className="text-sm  font-bold  mb-1">
                          {sub.label}
                        </h5>
                        {sub.options.map((item) => (
                          <span
                            className="text-sm text-gray-500 cursor-pointer hover:font-semibold"
                            key={item.id}
                            onClick={() =>
                              handleFilterSubcategory(item, sub.type)
                            }
                          >
                            {item.label}
                          </span>
                        ))}
                      </div>
                    ))}
                </div>
              </Modal>
            </div>
          </div>
          {/* Cart, Profile */}
          <div className="relative flex items-center gap-2 sm:gap-12">
            <Link to={"/cart"} className="flex items-center gap-2">
              <span className="hidden sm:block text-white">Giỏ hàng</span>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span className="absolute border -top-2 -right-3 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </div>
            </Link>
            <Button
              className={"bg-transparent p-0"}
              name={"user"}
              onClick={isLogin ? handleOpen : () => {}}
            >
              {isLogin ? (
                <div className="flex items-center gap-2">
                  <span className="hidden sm:block">Quốc Tính</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 sm:size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              ) : (
                <Link to={"/login"}>Đăng nhập</Link>
              )}
            </Button>
            <Modal
              isOpen={isOpen.user}
              onClose={handleClose}
              className={"right-0"}
            >
              <div className="flex flex-col items-start gap-3 w-[350px]  min-h-[600px]">
                <Link
                  to={"/profile"}
                  className="w-full flex items-center gap-2 border border-primary rounded-xl p-1 hover:scale-95 transition-all duration-300"
                >
                  <img src="./member-icon.svg" alt="" />
                  <span className="text-primary">Truy cập Xmember</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 text-primary -rotate-90 ml-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
                <span className="text-gray-500">Thông báo</span>
                <hr className="w-full text-gray-400" />

                <div className="flex-1 w-full flex flex-col items-center justify-center">
                  <img className="w-24" src="/empty-icon.svg" alt="" />
                  <p className="text-gray-800 font-semibold">
                    Bạn chưa có thông báo nào!
                  </p>
                  <p className="text-gray-500 text-sm text-center">
                    X-Admin sẽ gửi cho bạn những thông báo mới nhất tại đây nhé!
                  </p>
                </div>
                <hr className="w-full text-gray-400" />

                <p
                  onClick={handleClose}
                  className="w-full text-blue-500 font-semibold text-center cursor-pointer"
                >
                  Đóng
                </p>
              </div>
            </Modal>
          </div>
        </section>
      </header>
      <Backdrop isOpen={isOpen.category || isOpen.user} onClose={handleClose} />
    </>
  );
};

export default Header;
