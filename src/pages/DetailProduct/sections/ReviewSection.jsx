import { useState } from "react";
import Title from "../../Products/sections/Title";

const reviews = [
  {
    id: 1,
    name: "Khánh Ly",
    rating: 5,
    tags: [
      "Hiệu năng Siêu mạnh mẽ",
      "Thời lượng pin Cực khủng",
      "Chất lượng camera Chụp đẹp",
    ],
    content: "Tôi muốn huỷ đơn hàng WB******7",
    time: "1 tiếng trước",
  },
  {
    id: 2,
    name: "Hứa Anh Tài",
    rating: 4,
    tags: [
      "Hiệu năng Siêu mạnh mẽ",
      "Thời lượng pin Cực khủng",
      "Chất lượng camera Chụp đẹp",
    ],
    content: "Máy đẹp pin khá...",
    time: "9 ngày trước",
  },
];

export default function ReviewSection() {
  const [filter, setFilter] = useState("Tất cả");

  return (
    <div className=" bg-gray-100 p-5 rounded-xl shadow">
      <div className="flex gap-10 bg-white p-4 rounded-xl">
        <div className="text-center">
          <p className="text-4xl font-bold">
            4.9<span className="text-gray-500">/5</span>
          </p>
          <p className="text-gray-500">336 lượt đánh giá</p>
        </div>
        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2">
              <p className="flex items-center">
                <p className="min-w-3 font-semibold">{star}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor "
                  class="size-6 text-amber-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-primary h-2 rounded w-[80%]" />
              </div>
              <span className="text-sm text-gray-500">301</span>
            </div>
          ))}
        </div>
        <div>
          <p className="font-semibold text-xl mb-3">
            Đánh giá theo trải nghiệm
          </p>
          <ul className="text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="min-w-40">Hiệu năng:</span>
              <div className="flex items-center gap-1">
                {[5, 4, 3, 2, 1].map((star) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor "
                    class="size-6 text-amber-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p>(301 lượt đánh giá)</p>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-40">Thời lượng pin:</span>
              <div className="flex items-center gap-1">
                {[5, 4, 3, 2, 1].map((star) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor "
                    class="size-6 text-amber-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ))}
              </div>{" "}
              <p>(301 lượt đánh giá)</p>
            </li>
            <li className="flex items-center gap-2">
              <span className="min-w-40">Chất lượng camera:</span>
              <div className="flex items-center gap-1">
                {[5, 4, 3, 2, 1].map((star) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor "
                    class="size-6 text-amber-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ))}
              </div>{" "}
              <p>(301 lượt đánh giá)</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bộ lọc */}
      <div className="bg-white p-4 my-6 rounded-xl">
        <div className=" flex flex-wrap gap-3 my-4">
          <Title title="Lọc đánh giá theo" />
          {[
            "Tất cả",
            "Có hình ảnh",
            "5 sao",
            "4 sao",
            "3 sao",
            "2 sao",
            "1 sao",
          ].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-1 rounded-full bordercursor-pointer ${
                filter === f
                  ? "bg-blue-100 text-blue-500 border-blue-500 font-semibold "
                  : "bg-gray-100 border-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Danh sách review */}
        <div className="space-y-5">
          {reviews.map((r, i) => (
            <div
              key={r.id}
              className={`${
                i !== reviews.length - 1 && " border-b border-gray-200 "
              } pb-4`}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
                  {r.name[0]}
                </div>
                <span className="font-semibold">{r.name}</span>
                {/* Note update */}
                <span className="text-amber-400">{"★".repeat(r.rating)}</span>
              </div>
              <div className="flex flex-wrap gap-2 my-2">
                {r.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700">{r.content}</p>
              <p className="text-sm text-gray-400">{r.time}</p>
            </div>
          ))}
          <div className="flex justify-center">
            <button className="w-full sm:w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-500 px-4 py-2 rounded cursor-pointer">
              Xem tất đánh giá<span className="text-xl ml-2"> &gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
