import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RankCard from "./RankCard";

const Rank = () => {
  const user = {
    name: "Tính Quốc",
    totalBought: 100000000,
  };
  const ranks = [
    {
      id: "s-null",
      name: "S-NULL",
      min: 0,
      nextNeed: 3000000,
      nextRank: "S-NEW",
      img: "/s-null.png",
      condition: "Tổng số tiền mua hàng tích lũy từ 0 đến 3 triệu đồng.",
      offers: ["Hiện chưa có ưu đãi đặc biệt cho thành viên S-NULL."],
      policies: [
        "Hiện chưa có chính sách phục vụ đặc biệt cho thành viên S-NULL.",
      ],
    },
    {
      id: "s-new",
      name: "S-NEW",
      min: 3000000,
      nextNeed: 15000000,
      nextRank: "S-MEM",
      img: "/s-new.png",
      condition:
        "Tổng số tiền mua hàng tích lũy trong năm nay và năm liền trước đạt từ 3 đến 15 triệu đồng.",
      offers: [
        "Tặng voucher 50K khi lên hạng (từ S-NULL lên S-NEW).",
        "Giảm thêm 2% cho các sản phẩm thuộc nhóm hàng loa - tai nghe dưới 1 triệu.",
        "Giảm thêm 1% cho các sản phẩm phụ kiện khác (trừ sim, thẻ cào, phần mềm...).",
        "Giảm thêm 5% (tối đa 100.000đ) khi sử dụng dịch vụ sửa chữa tại Điện Thoại Vui.",
        "Giảm thêm 5% (tối đa 200.000đ) khi thực hiện thu cũ đổi mới.",
        "Ưu đãi sinh nhật: Tặng phiếu mua hàng trị giá 50.000đ.",
      ],
      policies: ["Chính sách phục vụ sẽ được áp dụng khi đạt hạng này."],
    },
    {
      id: "s-mem",
      name: "S-MEM",
      min: 15000000,
      nextNeed: 50000000,
      nextRank: "S-VIP",
      img: "/s-mem.png",
      condition:
        "Tổng số tiền mua hàng tích lũy trong năm nay và năm liền trước đạt từ 15 đến 50 triệu đồng.",
      offers: [
        "Tặng voucher 100K khi lên hạng (từ S-NEW lên S-MEM).",
        "Ưu đãi thu cũ 5% lên đến 300K cho các sản phẩm mua tại CellphoneS.",
        "Miễn phí giao hàng áp dụng cho mọi đơn hàng.",
        "Giảm thêm 0.5% khi mua các sản phẩm máy (điện thoại, máy tính, máy tính bảng, Apple Watch).",
        "Giảm thêm 3% khi mua các sản phẩm thuộc nhóm hàng loa - tai nghe dưới 1 triệu, sạc dự phòng, cũ cáp, bao da, ốp lưng, balo - túi xách.",
        "Giảm thêm 2% khi mua các sản phẩm thuộc nhóm hàng phụ kiện còn lại (trừ sim, thẻ cào, phần mềm...).",
        "Giảm thêm 5% (tối đa 200.000đ) khi sử dụng dịch vụ sửa chữa tại Điện Thoại Vui.",
        "Giảm thêm 5% (tối đa 300.000đ) khi thực hiện thu cũ đổi mới.",
        "Ưu đãi sinh nhật: Tặng phiếu mua hàng trị giá 200.000đ.",
      ],
      policies: [
        "Tham gia chương trình đặt trước sản phẩm không cần đặt cọc tiền.",
      ],
    },
    {
      id: "s-vip",
      name: "S-VIP",
      min: 50000000,
      nextNeed: Infinity,
      nextRank: null,
      img: "/s-vip.png",
      condition:
        "Tổng số tiền mua hàng tích lũy trong năm nay và năm liền trước đạt từ 50 triệu đồng trở lên.",
      offers: [
        "Tặng voucher 300K khi lên hạng (từ S-MEM lên S-VIP).",
        "Ưu đãi thu cũ 5% lên đến 500K cho các sản phẩm mua tại CellphoneS.",
        "Miễn phí giao hàng áp dụng cho mọi đơn hàng.",
        "Giảm thêm 1% khi mua các sản phẩm máy (điện thoại, máy tính, máy tính bảng, Apple Watch).",
        "Giảm thêm 5% khi mua các sản phẩm thuộc nhóm hàng loa - tai nghe dưới 1 triệu, sạc dự phòng, cũ cáp, bao da, ốp lưng, balo - túi xách.",
        "Giảm thêm 3% khi mua các sản phẩm thuộc nhóm hàng phụ kiện còn lại (trừ sim, thẻ cào, phần mềm...).",
        "Giảm thêm 5% (tối đa 300.000đ) khi sử dụng dịch vụ sửa chữa tại Điện Thoại Vui.",
        "Giảm thêm 5% (tối đa 500.000đ) khi thực hiện thu cũ đổi mới.",
        "Ưu đãi sinh nhật: Tặng phiếu mua hàng trị giá 500.000đ.",
      ],
      policies: [
        "Tham gia chương trình đặt trước sản phẩm không cần đặt cọc tiền.",
        "Tổng đài hỗ trợ và chăm sóc đặc biệt: 1800.2097.",
      ],
    },
  ];

  const [active, setActive] = useState(ranks[0]);

  return (
    <div className="space-y-6 h-full shadow shadow-gray-300 rounded-xl p-4 bg-white">
      {/* Slider rank */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        onSlideChange={(swiper) => setActive(ranks[swiper.activeIndex])}
      >
        {ranks.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!max-w-[400px] rounded-xl overflow-hidden cursor-pointer"
          >
            <RankCard
              item={item}
              isActive={item.id === active.id}
              user={user}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thông tin rank */}
      {active && (
        <div className="space-y-4 h-ful">
          <div>
            <h3 className="font-bold text-xl text-primary border-b border-gray-300 py-4 text-center ">
              ĐIỀU KIỆN THĂNG CẤP
            </h3>
            <div className="flex items-center gap-2 my-3">
              <div className="bg-primary w-12 h-12 flex justify-center items-center rounded-xl">
                <i className="fa-regular fa-gem text-white text-2xl"></i>
              </div>
              <p className="text-lg text-gray-700 font-semibold">
                {active.condition}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl text-primary border-b border-gray-300 py-4 text-center ">
              ƯU ĐÃI MUA HÀNG
            </h3>{" "}
            <ul className="mt-2 space-y-8">
              {active.offers.map((offer, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="bg-primary w-12 h-12 flex justify-center items-center rounded-xl">
                    <i className="fa-solid fa-gift text-white text-2xl"></i>
                  </div>
                  <span className="text-lg text-gray-700 font-semibold">
                    {offer}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl text-primary border-b border-gray-300 py-4 text-center ">
              CHÍNH SÁCH PHỤC VỤ
            </h3>
            <ul className="mt-2 space-y-8">
              {active.policies.map((p, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="bg-primary w-12 h-12 flex justify-center items-center rounded-xl">
                    <i className="fa-solid fa-shield-halved text-white text-2xl"></i>
                  </div>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rank;
