const FilterMobile = () => {
  return (
    <div className="w-full block sm:hidden sm:w-[1200px] mx-auto px-4 py-3 mt-5">
      <div className="flex justify-between items-center gap-5">
        <div className="flex flex-col items-center justify-center  gap-2 cursor-pointer">
          <img className="w-10" src="/phone-icon.webp" alt="" />
          <span className="text-sm text-center">Điện thoại</span>
        </div>
        <div className="flex flex-col items-center justify-center  gap-2 cursor-pointer">
          <img className="w-10" src="/tablet-icon.png" alt="" />
          <span className="text-sm text-center">Tablet</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <img className="w-10" src="/laptop-icon.webp" alt="" />

          <span className="text-sm text-center">Laptop</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2  cursor-pointer">
          <img className="w-10" src="/watch-icon.webp" alt="" />
          <span className="text-sm">Đồng hồ</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <img className="w-10" src="/headphone-icon.webp" alt="" />

          <span className="text-sm">Tai nghe</span>
        </div>
      </div>
    </div>
  );
};

export default FilterMobile;
