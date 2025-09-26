import React, { useState } from "react";
import Title from "../../Products/sections/Title";

const CharacteristicSection = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-4 my-5">
      <Title title={`Đặc điểm nổi bật của ${product.name}`} />
      <p className="text-gray-500 bg-white rounded-xl p-4 ">
        iPhone 16 Pro Max sở hữu chipset A18 Pro mạnh mẽ giúp xử lý nhanh mọi
        tác vụ, camera 48 MP zoom quang 5x cho ảnh nét, màn hình 6.9 inch sống
        động. Pin dung lượng cao của máy hỗ trợ phát video tới 33 tiếng, đáp ứng
        nhu cầu giải trí liên tục suốt ngày dài. Cùng với đó là thiết kế khung
        Titanium bền nhẹ, mang lại cảm giác sang trọng và chắc chắn khi cầm.
      </p>
      <div
        className=" flex items-center justify-between bg-gray-50 px-3 py-2 rounded-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-semibold text-gray-500">Nội dung chính</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-300 text-gray-500 ${
            isOpen ? " rotate-0" : "-rotate-90"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div
        className={`text-gray-500 bg-white rounded-xl p-4 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <p>
          Giá iPhone 16 Pro Max bao nhiêu tiền 09/2025? Giá iPhone 16 Pro Max
          hiện đang ở mức 30.39 triệu đồng cho phiên bản 256GB, là lựa chọn phổ
          biến với dung lượng lưu trữ đáp ứng tốt cho nhu cầu thông thường. Với
          những người dùng thường xuyên làm việc với dữ liệu lớn hoặc đam mê
          chụp ảnh, quay phim, phiên bản 512GB có giá 36.79 triệu đồng sẽ là lựa
          chọn hợp lý hơn.{" "}
        </p>
      </div>
    </div>
  );
};

export default CharacteristicSection;
