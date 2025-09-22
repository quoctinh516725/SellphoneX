import React from "react";
import ImageLazy from "../../../components/ImageLazy";
import { assets } from "../../../assets";
import ProductImages from "./ProductImages";
import ProductSpecifications from "./ProductSpecifications";
import Title from "../../Products/sections/Title";
import Reveal from "../../../components/Reveal";

const ProductDetailSection = ({ product }) => {
  return (
    <div className="w-1/2 flex flex-col gap-5">
      {/* Tên sản phẩm */}
      <Reveal>
        <div className="flex flex-col gap-3 ">
          <Title title="Iphone 14 Pro Max" />
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-star text-amber-300" />
            <span className="font-semibold">4.3</span>
            <span className="text-gray-400">(34 đánh giá)</span>
          </div>
          <div className="flex items-center gap-3 divide-gray-500">
            <div className="flex items-center gap-1">
              <i className="fa-regular fa-heart text-blue-500"></i>
              <span className="font-semibold text-blue-500">Yêu thích</span>
            </div>
            <div className="flex items-center gap-1">
              <i class="fa-regular fa-message text-blue-500"></i>{" "}
              <span className="font-semibold text-blue-500">Hỏi đáp</span>
            </div>
            <div className="flex items-center gap-1">
              <i class="fa-solid fa-microchip text-blue-500"></i>{" "}
              <span className="font-semibold text-blue-500">Thông số</span>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-plus text-blue-500"></i>
              <span className="font-semibold text-blue-500">So sánh</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Hình ảnh sản phẩm */}
      <ProductImages />

      {/* Cam kết sản phẩm */}
      <div>
        <Reveal>
          <Title title="Cam kết sản phẩm" />
          <div className="w-full grid grid-cols-2 gap-10 p-5">
            <div>
              <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Mới, đầy đủ phụ kiện từ nhà sản xuất. CellphoneS hiện là đại lý
                bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam
              </p>
            </div>{" "}
            <div>
              <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành
                12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn
              </p>
            </div>{" "}
            <div>
              <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C
              </p>
            </div>{" "}
            <div>
              <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                  />
                </svg>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Giá sản phẩm
                <span className="font-semibold"> đã bao gồm thuế VAT </span>giúp
                bạn yên tâm và dễ dàng trong việc tính toán chi phí.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Thông số kĩ thuật */}
      <ProductSpecifications products={""} />
    </div>
  );
};

export default ProductDetailSection;
