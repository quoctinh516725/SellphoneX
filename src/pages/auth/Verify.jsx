import React from "react";

const Verify = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/forgot-icon.png" alt="Mascot" className="w-24 h-24" />
          <h2 className="text-2xl font-bold text-red-600">Tạo mật khẩu mới</h2>
          <p className="text-gray-600 text-center mt-2">
            Vui lòng nhập OTP vừa được gửi qua{" "}
            <span className="font-semibold text-black">Email</span> đến{" "}
            <span className="font-semibold text-black">
              tinhnq123@gmail.com
            </span>
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-3">
          <button
            type="button"
            className="w-1/2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 cursor-pointer"
          >
            Quay lại
          </button>
          <button
            type="button"
            className="w-1/2 bg-red-600 text-white rounded-lg py-2 hover:bg-red-700 cursor-pointer"
          >
            Xác nhận
          </button>
        </div>

        {/* Resend OTP */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">(Mã OTP sử dụng 3 phút)</p>

          <button
            type="button"
            disabled
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
          >
            Nhận mã sau 18s
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
