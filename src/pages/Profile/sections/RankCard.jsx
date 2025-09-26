import React from "react";
import { FormatPrice } from "../../../utils/FormatPrice";
const RankCard = ({ item, isActive, user }) => {
  const hasLock = user.totalBought >= item.min;
  const needMore = user.totalBought < item.nextNeed;
  const bought = needMore ? user.totalBought : item.nextNeed;
  const percent =
    item.nextNeed === Infinity
      ? 100
      : Math.min((user.totalBought / item.nextNeed) * 100, 100);
  return (
    <div
      className={`relative cursor-pointer rounded-xl overflow-hidden border-2 border-gray-200 ${
        isActive ? "shadow-lg" : "border-transparent"
      }`}
    >
      {/* Ảnh nền */}
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-full object-cover"
      />

      {/* Tên rank */}
      <div className=" absolute top-0 left-0 bg-white/50 px-6 py-1 rounded-br-2xl shadow-xl shadow-gray-500 text-sm font-semibold ">
        {item.name}
      </div>
      <div
        className={`absolute top-1/4 left-0 w-full h-full p-3 space-y-2 ${
          item.name === "S-VIP" ? "text-white" : "text-black"
        }`}
      >
        <div className="flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-10 bg-gray-400 rounded-full pt-2 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clip-rule="evenodd"
            />
          </svg>

          <span className="hidden sm:block text-xl font-bold">{user.name}</span>
        </div>
        {hasLock ? (
          <>
            <p>
              Đã mua <span className="font-bold">{FormatPrice(bought)}</span>/
              {item.name === "S-VIP" ? (
                <i class="fas fa-infinity"></i>
              ) : (
                FormatPrice(item.nextNeed)
              )}
            </p>
            <div className="w-full h-1 bg-white rounded-full relative">
              <div
                className="absolute top-0 left-0 h-full bg-primary rounded-full"
                style={{
                  width: `${percent}%`,
                }}
              ></div>
            </div>
            {needMore && item.nextNeed!==Infinity ? (
              <p>
                Cần tiêu thêm
                <span className="font-bold">
                  {" "}
                  {FormatPrice(item.nextNeed - user.totalBought)}{" "}
                </span>{" "}
                để đạt hạng <span className="font-bold"> {item.nextRank}</span>
              </p>
            ) : (
              <p>
                Đã đạt hạng
                <span className="font-bold"> {item.nextRank}</span>
              </p>
            )}
          </>
        ) : (
          <div className="flex justify-start items-center gap-2 text-gray-400 font-semibold text-sm mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <p>Chưa mở khoá hạng thành viên</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RankCard;
