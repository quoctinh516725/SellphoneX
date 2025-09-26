import React from "react";
import { Link, useLocation } from "react-router-dom";

const sideBar = [
  {
    path: "/profile",
    icon: <i className="text-2xl fa-regular fa-house"></i>,
    label: "Tổng quan",
  },
  {
    path: "/profile/orders",
    icon: <i className="text-2xl fa-regular fa-clock"></i>,
    label: "Lịch sử mua hàng",
  },
  {
    path: "/profile/warranty",
    icon: <i className="text-2xl fa-solid fa-shield-halved"></i>,
    label: "Tra cứu bảo hành",
  },
  {
    path: "/profile/rank",
    icon: <i className="text-2xl fa-regular fa-star"></i>,
    label: "Hạng thành viên và ưu đãi",
  },
  {
    path: "/profile/account",
    icon: <i className="text-2xl fa-regular fa-user"></i>,
    label: "Thông tin tài khoản",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  const isActice = (itemPath, currentPath) => {
    if (itemPath === "/profile") {
      return currentPath === "/profile";
    }
    return currentPath.startsWith(itemPath);
  };
  return (
    <div className="h-full  bg-white rounded-lg shadow shadow-gray-500 flex flex-col justify-between">
      <div>
        {sideBar.map((item, idx) => (
          <Link
            to={item.path}
            key={idx}
            className={`flex items-center gap-5 w-full text-left text-xl text-nowrap py-6 px-8 border-l-4 hover:bg-primary/5 hover:text-primary hover:border-primary/50 transition cursor-pointer ${
              isActice(item.path, pathname)
                ? "bg-primary/10 text-primary font-semibold border-primary"
                : "border-transparent text-gray-700 font-medium"
            }`}
          >
            <span className="flex items-center justify-center">
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
        <p
          className={`flex items-center gap-5 w-full text-left text-xl text-nowrap py-6 px-8 border-l-4 border-transparent hover:bg-primary/5 hover:text-primary hover:border-primary/50 transition cursor-pointer `}
        >
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 text-primary"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span className="text-primary">Đăng Xuất</span>
        </p>
      </div>

      {/* Footer nhỏ ở dưới sidebar */}
      <div className="p-4 text-sm text-gray-500">
        <p>
          Mua sắm dễ dàng - Ưu đãi ngập tràn cùng{" "}
          <Link to={"/"} className="text-primary font-bold">
            SellphoneX
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
