import React from "react";
import Button from "./Button";

const questions = [
  {
    userId: 1,
    userName: "Lê Văn Hòa",
    questionId: 1,
    time: "1 ngày trước",
    question: "Em muốn mua 1 chiếc oppo 14f 5g cũ ở tp Bắc Ninh có đc k ạ",
    answer:
      "CellphoneS xin chào Anh Lê Văn Hòa, Sản phẩm OPPO RENO 14F 5G 8GB 256GB XANH DƯƠNG - ĐÃ KÍCH HOẠT. Giá thời điểm hiện tại 7.990.000đ. Khu vực miền Bắc. Sản phẩm thu lại từ khách hàng không còn nhu cầu (một số sản phẩm có thể đã qua bảo hành hãng hoặc sửa chữa thay thế linh kiện, hiệu suất pin không bằng hàng mới), nguồn gốc rõ ràng, xuất hoá đơn eVAT.",
  },
  {
    userId: 2,
    userName: "Anh Việt",
    questionId: 2,
    time: "1 giờ trước",
    question: "Điện thoại nào trong tầm giá 3tr có cam chụp hình đẹp",
    answer: null,
  },
  {
    userId: 3,
    userName: "Lý Phú Thành",
    questionId: 3,
    time: "1 giờ trước",
    question:
      "Cho hỏi có máy nào rẻ tầm 5 triệu mà chơi game mượt pin trâu và dung lượng nhiều không ạ?",
    answer: null,
  },
];

const Question = () => {
  return (
    <div className="w-full sm:max-w-[1200px] mx-auto p-4 bg-gray-100/70 rounded-xl shadow my-10">
      {/* Header hướng dẫn */}
      <h3 className="font-bold text-lg mb-2 text-gray-600">Hỏi và đáp</h3>
      <div className="p-4 bg-white rounded-xl mb-4">
        <h3 className="font-bold text-lg mb-2 text-gray-600">
          Hãy đặt câu hỏi cho chúng tôi
        </h3>
        <p className="text-sm text-gray-400 font-semibold mb-2">
          SellphoneX sẽ phản hồi trong vòng 1 giờ. Nếu Quý khách gửi câu hỏi sau
          22h, chúng tôi sẽ trả lời vào sáng hôm sau.
        </p>
        <div className="flex justify-center mt-5">
          <button className="w-1/2 bg-primary hover:bg-red-600 text-white px-4 py-2 rounded font-semibold">
            Gửi câu hỏi <i class="fa-regular fa-paper-plane"></i>
          </button>
        </div>
      </div>

      {/* Danh sách câu hỏi */}
      <div className="space-y-4 p-3 bg-white rounded-xl">
        {questions.map((q, idx) => (
          <div
            key={q.questionId}
            className={` p-3 ${
              idx !== questions.length - 1 && "border-b"
            }  border-gray-200`}
          >
            {/* Thông tin user */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold">
                {q.userName[0]}
              </div>
              <div>
                <p className="font-semibold">{q.userName}</p>
                <p className="text-xs text-gray-500">{q.time}</p>
              </div>
            </div>

            {/* Câu hỏi */}
            <p className="text-gray-800 mb-2">{q.question}</p>
            <p className="text-primary text-xs mb-2 cursor-pointer">
              <i class="fa-regular fa-message mr-2"></i>
              Phản hồi
            </p>

            {/* Câu trả lời nếu có */}
            {q.answer && (
              <div className="ml-10 mt-2 border-l-4 border-red-500 pl-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                    <img
                      className="w-12 sm:w-8 p-1 border border-white/30"
                      src="/logo.png"
                      alt=""
                    />
                  </div>
                  <p className="font-semibold text-red-500">Quản Trị Viên</p>
                  <span className="text-xs text-gray-500">Trả lời</span>
                </div>
                <p className="text-sm text-gray-700">{q.answer}</p>
                <p className="text-primary text-xs my-2 cursor-pointer">
                  <i class="fa-regular fa-message mr-2"></i>
                  Phản hồi
                </p>
              </div>
            )}
          </div>
        ))}
        <div className="flex justify-center">
          <button className="w-full sm:w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-500 px-4 py-2 rounded cursor-pointer">
            Xem tất câu hỏi<span className="text-xl ml-2"> &gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
