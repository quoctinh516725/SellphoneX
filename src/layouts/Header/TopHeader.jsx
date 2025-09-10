import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="w-full relative z-50 ">
      <section className="max-w-[1200px] mx-auto  px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="w-full md:max-w-[750px]  overflow-hidden">
            <ul className="flex whitespace-nowrap animate-marquee">
              <li className="mx-5 text-white font-semibold text-xs">
                Sản phẩm Chính hãng - Xuất VAT đầy đủ
              </li>
              <li className="mx-5 text-white font-semibold text-xs">
                Giao nhanh - Miễn phí cho đơn 300k
              </li>
              <li className="mx-5 text-white font-semibold text-xs">
                Thu cũ giá ngon - Lên đời tiết kiệm
              </li>
              <li className="mx-5 text-white font-semibold text-xs">
                Sản phẩm Chính hãng - Xuất VAT đầy đủ
              </li>
              <li className="mx-5 text-white font-semibold text-xs">
                Giao nhanh - Miễn phí cho đơn 300k
              </li>
              <li className="mx-5 text-white font-semibold text-xs">
                Thu cũ giá ngon - Lên đời tiết kiệm
              </li>
            </ul>
          </div>
          <div className=" hidden md:flex items-center divide-x-2 divide-white/50">
            <Link to={"#"}>
              <p className="flex  gap-2 text-xs px-5  text-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                <span className="text-white font-semibold">
                  Cửa hàng gần bạn
                </span>
              </p>
            </Link>
            <Link to={"#"}>
              <p className="flex  gap-2 text-xs px-5  text-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>

                <span className="text-white font-semibold">Tra cứu đơn</span>
              </p>
            </Link>
            <Link to={"#"}>
              <p className="flex  gap-2 text-xs px-5  text-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <span className="text-white font-semibold">
                  +84 123 456 789
                </span>
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopHeader;
