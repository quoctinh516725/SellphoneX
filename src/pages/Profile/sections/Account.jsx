import React from "react";

const Account = () => {
  return (
    <div className="w-full h-full sm:max-w-[1200px] mx-auto grid grid-cols-1 gap-6">
      {/* Thông tin cá nhân */}
      <div className="bg-white rounded-xl shadow shadow-gray-500 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Thông tin cá nhân</h3>
          <button className="text-red-500 text-sm flex gap-2 items-center font-semibold cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
            <span> Cập nhật</span>
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <p>
            <span className="font-semibold">Họ và tên:</span> Tính Quốc
          </p>
          <p>
            <span className="font-semibold">Số điện thoại:</span> 0362773313
          </p>
          <p>
            <span className="font-semibold">Giới tính:</span> -
          </p>
          <p>
            <span className="font-semibold">Email:</span> kultivi1234@gmail.com
          </p>
          <p>
            <span className="font-semibold">Ngày sinh:</span> 27/10/2005
          </p>
          <p>
            <span className="font-semibold">Địa chỉ mặc định:</span> -
          </p>
        </div>
      </div>

      {/* Sổ địa chỉ */}
      <div className="bg-white rounded-xl shadow shadow-gray-500 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Sổ địa chỉ</h3>
          <button className="text-red-500 font-semibold text-sm cursor-pointer">
            <i className="fa-solid fa-plus mr-1"></i>Thêm địa chỉ
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-xl p-3 text-sm">
            <p className="font-semibold">Quốc Tính</p>
            <p className="text-gray-500">0362773313</p>
            <p className="text-gray-500">
              178 Nguyễn Văn Cừ, Phường Trung Mỹ Tây, Quận 12, Hồ Chí Minh
            </p>
            <div className="flex gap-4 mt-2 text-red-500">
              <button className="text-sm text-gray-500 cursor-pointer hover:text-primary">
                Xóa
              </button>
              <button className="text-sm text-blue-500 font-semibold cursor-pointer">
                Cập nhật
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-3 text-sm">
            <p className="font-semibold">Quốc Tính</p>
            <p className="text-gray-500">0362773313</p>
            <p className="text-gray-500">
              178 Nguyễn Văn Cừ, Phường Trung Mỹ Tây, Quận 12, Hồ Chí Minh
            </p>
            <div className="flex gap-4 mt-2 text-red-500">
              <button className="text-sm text-gray-500 cursor-pointer hover:text-primary">
                Xóa
              </button>
              <button className="text-sm text-blue-500 font-semibold cursor-pointer">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mật khẩu + Tài khoản liên kết */}
      <div className="grid sm:grid-cols-2 rounded-xl gap-6 ">
        {/* Mật khẩu */}
        <div className="bg-white rounded-xl shadow shadow-gray-500 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Mật khẩu</h3>
            <button className="text-red-500 text-sm">
              <i className="fa-solid fa-key mr-1"></i>Thay đổi mật khẩu
            </button>
          </div>
          <p className="text-sm text-gray-600 flex justify-between">
            <span>Cập nhật lần cuối lúc:</span>{" "}
            <span className="font-semibold">29/07/2025 16:12</span>
          </p>
        </div>

        {/* Tài khoản liên kết */}
        <div className="bg-white rounded-xl shadow shadow-gray-500 p-4">
          <h3 className="font-semibold text-lg mb-4">Tài khoản liên kết</h3>

          <div className=" gap-3">
            <div className="flex-1 flex items-center justify-between gap-2   rounded-lg py-2 hover:bg-gray-100">
              <div className="flex gap-3">
                <img src="/google-icon.svg" alt="" />
                <span>Google</span>
              </div>
              <button className="flex gap-3 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-primary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                <span className="text-primary">Huỷ liên kết</span>
              </button>
            </div>
            <div className="flex-1 flex items-center gap-2 justify-between  rounded-lg py-2 hover:bg-gray-100">
              <div className="flex gap-3">
                <img src="/facebook-icon.png" alt="" className="w-7" />
                <span>Facebook</span>
              </div>
              <button className="flex gap-3 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                <span className="text-blue-500">Liên kết</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
