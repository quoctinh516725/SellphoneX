import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone:", phone);
    // TODO: call API reset password
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/forgot-icon.png" alt="Mascot" className="w-28 h-28" />
          <h2 className="text-2xl font-bold text-red-600">Tạo mật khẩu mới</h2>
          <p className="text-gray-600 text-sm text-center mt-2">
            Hãy nhập email của bạn vào bên dưới để bắt đầu quá trình khôi phục
            mật khẩu.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email khôi phục
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Nhập email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex justify-between gap-3">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-1/2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 cursor-pointer "
            >
              Quay lại đăng nhập
            </button>
            <button
              type="submit"
              className="w-1/2 bg-red-600 text-white rounded-lg py-2 hover:bg-red-700 cursor-pointer"
            >
              Tiếp tục
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
