import React from "react";
import Title from "../../Products/sections/Title";
import Reveal from "../../../components/Reveal";

const productSpecs = {
  screen: {
    size: "6.1 inches",
    technology: "OLED",
    resolution: "2532 x 1170 pixels",
    features:
      "Tần số quét 60Hz, 1200 nits, Kính cường lực Ceramic Shield, Super Retina XDR",
  },
  camera: {
    rear: ["Camera góc rộng: 12MP, f/1.5", "Camera góc siêu rộng: 12MP, f/2.4"],
    front: "12MP, f/1.9",
  },
  chipset: "Apple A15 Bionic 6 nhân",
  nfc: true,
  ram: "6 GB",
  storage: "128 GB",
  battery: "3,279 mAh",
  sim: "2 SIM (nano-SIM và eSIM)",
  os: "iOS 16",
  cpu: "3.22 GHz",
};

const ProductSpecifications = () => {
  // mapping keys của productSpecs sang label hiển thị
  const specsMap = [
    { label: "Kích thước màn hình", value: productSpecs.screen.size },
    { label: "Công nghệ màn hình", value: productSpecs.screen.technology },
    { label: "Độ phân giải màn hình", value: productSpecs.screen.resolution },
    { label: "Tính năng màn hình", value: productSpecs.screen.features },
    {
      label: "Camera sau",
      value: productSpecs.camera.rear.map((c, i) => <div key={i}>{c}</div>),
    },
    { label: "Camera trước", value: productSpecs.camera.front },
    { label: "Chipset", value: productSpecs.chipset },
    { label: "Công nghệ NFC", value: productSpecs.nfc ? "Có" : "Không" },
    { label: "Dung lượng RAM", value: productSpecs.ram },
    { label: "Bộ nhớ trong", value: productSpecs.storage },
    { label: "Pin", value: productSpecs.battery },
    { label: "Thẻ SIM", value: productSpecs.sim },
    { label: "Hệ điều hành", value: productSpecs.os },
    { label: "Loại CPU", value: productSpecs.cpu },
  ];

  return (
    <div>
      <Reveal>
        <Title title="Thông số kỹ thuật" />
        <table className="mt-5 table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="">
              <th className="border  border-gray-300 px-4 py-2 bg-gray-100 text-start">
                Thông số
              </th>
              <th className="border border-gray-300 px-4 py-2 text-start">
                Chi tiết
              </th>
            </tr>
          </thead>
          <tbody>
            {specsMap.map((spec, idx) => (
              <tr key={idx}>
                <td className="border text-gray-500 border-gray-300 bg-gray-100 px-4 py-2">
                  {spec.label}
                </td>
                <td className="border text-gray-500 border-gray-300 px-4 py-2">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </div>
  );
};

export default ProductSpecifications;
