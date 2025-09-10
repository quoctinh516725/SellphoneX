const FilterMobile = () => {
  return (
    <div className="w-full block sm:hidden sm:w-[1200px] mx-auto px-4 py-3 mt-5">
      <div className="flex justify-between items-center gap-5">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <span className="text-sm">Điện thoại</span>
         
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <span className="text-sm">Máy tính bảng</span>
         
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <img className="size-6" src="/laptop-icon.svg" alt="" />
          <span className="text-sm">Laptop</span>
         
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <img className="size-6" src="/watch-icon.svg" alt="" />
          <span className="text-sm">Đồng hồ</span>
         
        </div>
      </div>
    </div>
  );
};

export default FilterMobile;
