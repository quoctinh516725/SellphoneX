import banner1 from "./banner1.webp";
import banner2 from "./banner2.png";
import banner3 from "./banner3.png";
import banner4 from "./banner4.png";
import bannerProduct1 from "./bannerProduct1.webp";
import bannerProduct2 from "./bannerProduct2.webp";
import bannerProduct3 from "./bannerProduct3.webp";
import bannerProduct4 from "./bannerProduct4.webp";
import bannerProduct5 from "./bannerProduct5.webp";
import bannerProduct6 from "./bannerProduct6.webp";
import specialBanner from "./special-banner.gif";
import productImg1 from "./productImg.webp";
import productImg2 from "./productImg1.webp";
import productImg3 from "./productImg3.webp";
import productImg4 from "./productImg4.webp";
import productImg5 from "./productImg5.webp";
import productImg6 from "./productImg6.webp";
import productImg7 from "./productImg7.webp";
import productImg8 from "./productImg8.webp";
import TitanDen from "./TitanDen.webp";
import TitanTrang from "./TitanTrang.webp";
import TitanTuNhien from "./TitanTuNhien.webp";
import StudentBanner from "./student-banner.png";
import BankBanner from "./bank-banner.webp";
import BrandBanner from "./brand-banner.webp";
import BlogBanner from "./blog-banner.jpg";
import brand1 from "./frame_1.png";
import brand2 from "./frame_2.png";
import brand3 from "./frame_3.png";
import brand4 from "./frame_4.png";
import brand5 from "./frame_5.png";
import brand6 from "./frame_6.png";
import brand7 from "./frame_7.png";
import brand8 from "./frame_8.png";
import brand9 from "./frame_9.png";
import brand10 from "./frame_10.png";
import brand11 from "./frame_11.png";
import brand12 from "./frame_12.png";
import brand13 from "./frame_13.png";
import brand14 from "./frame_14.png";

import phoneGaming from "./phone-gaming.png";
import phone5g from "./phone-5g.png";
import phoneCamera from "./phone-camera.png";
import phoneFold from "./phone-fold.png";
import phoneNokia from "./phone-nokia.webp";
import phonePin from "./phone-pin.png";

import laptop from "./laptopImg1.webp";

export const assets = {
  banner: [banner1, banner2, banner3, banner4],
  bannerProducts: [
    bannerProduct1,
    bannerProduct2,
    bannerProduct3,
    bannerProduct4,
    bannerProduct5,
    bannerProduct6,
  ],
  brands: [
    { name: "apple", img: brand1 },
    { name: "samsung", img: brand2 },
    { name: "xiaomi", img: brand3 },
    { name: "oppo", img: brand4 },
    { name: "realme", img: brand5 },
    { name: "vivo", img: brand6 },
    { name: "nokia", img: brand7 },
    { name: "asus", img: brand8 },
    { name: "dell", img: brand9 },
    { name: "hp", img: brand10 },
    { name: "msi", img: brand11 },
    { name: "acer", img: brand12 },
    { name: "huawei", img: brand13 },
    { name: "garmin", img: brand14 },
  ],
  subBanner: [banner1, banner2],
  specialBanner: specialBanner,
  products: [
    {
      id: 1,
      images: [
        productImg1,
        productImg2,
        productImg3,
        productImg4,
        productImg5,
        productImg6,
        productImg7,
        productImg8,
      ],
      price: 34990,
      price_sale: 29990,
      discount: 0,
      isSale: true,
      name: "Iphone 16 Pro Max 256GB",
      brand: "Apple",
      rate: 4.5,
      colors: [
        { img: productImg1, name: "Titan Sa mạc" },
        { img: TitanDen, name: "Titan Đen" },
        { img: TitanTrang, name: "Titan Trắng" },
        { img: TitanTuNhien, name: "Titan Tự Nhiên" },
      ],
      thong_so: {
        screen: 6.9,
        screen_tech: "Super Retina XDR OLED",
        camera_front: "12MP, ƒ/1.9, Tự động lấy nét theo pha Focus Pixels",
        camera_rear: [
          "Camera chính: 48MP, f/1.78, 24mm, 2µm, chống rung quang học dịch chuyển cảm biến thế hệ thứ hai, Focus Pixels 100%",
          "Telephoto 2x 12MP: 52 mm, ƒ/1.6",
          "Camera góc siêu rộng: 48MP, 13 mm,ƒ/2.2 và trường ảnh 120°, Hybrid Focus Pixels, ảnh có độ phân giải 4K",
        ],
        npc_tech: true,
        rom: [256, 512, 1024],
        ram: [8],
        chip: "Apple A18 Pro",
        sim: "Sim kép (nano-Sim và e-Sim) - Hỗ trợ 2 e-Sim",
        system: "iOS 18",
        resolution: "2868 x 1320 pixels",
        feature: [
          "Dynamic Island",
          "Màn hình Luôn Bật",
          "Công nghệ ProMotion với tốc độ làm mới thích ứng lên đến 120Hz",
          "Màn hình HDR",
          "True Tone",
          "Dải màu rộng (P3)",
          "Haptic Touch",
          "Tỷ lệ tương phản 2.000.000:1",
        ],
        cpu: "CPU 6 lõi mới với 2 lõi hiệu năng và 4 lõi hiệu suất",
      },

      description:
        "iPhone 16 Pro Max sở hữu chipset A18 Pro mạnh mẽ giúp xử lý nhanh mọi tác vụ, camera 48 MP zoom quang 5x cho ảnh nét, màn hình 6.9 inch sống động. Pin dung lượng cao của máy hỗ trợ phát video tới 33 tiếng, đáp ứng nhu cầu giải trí liên tục suốt ngày dài. Cùng với đó là thiết kế khung Titanium bền nhẹ, mang lại cảm giác sang trọng và chắc chắn khi cầm.",
      reviews: [
        {
          id: 1,
          userId: 1,
          rate: 5,
          comment:
            "Hiệu năng Siêu mạnh mẽ, Thời lượng pin Cực khủng, Chất lượng camera Chụp đẹp, chuyên nghiệp, sản phẩm tốt, chụp ảnh đẹp",
        },
      ],
      category: "phone",
      subCategory: "iphone",
      bestseller: true,
      quantity: 100,
      sold: 10,
      status: "active",
    },
    {
      id: 2,
      images: [
        productImg1,
        productImg2,
        productImg3,
        productImg4,
        productImg5,
        productImg6,
        productImg7,
        productImg8,
      ],
      price: 34990,
      price_sale: 29990,
      discount: 0,
      isSale: true,
      name: "Iphone 16 Pro Max 256GB",
      brand: "Apple",
      rate: 4.5,
      colors: [
        { img: productImg1, name: "Titan Sa mạc" },
        { img: TitanDen, name: "Titan Đen" },
        { img: TitanTrang, name: "Titan Trắng" },
        { img: TitanTuNhien, name: "Titan Tự Nhiên" },
      ],
      thong_so: {
        screen: 6.9,
        screen_tech: "Super Retina XDR OLED",
        camera_front: "12MP, ƒ/1.9, Tự động lấy nét theo pha Focus Pixels",
        camera_rear: [
          "Camera chính: 48MP, f/1.78, 24mm, 2µm, chống rung quang học dịch chuyển cảm biến thế hệ thứ hai, Focus Pixels 100%",
          "Telephoto 2x 12MP: 52 mm, ƒ/1.6",
          "Camera góc siêu rộng: 48MP, 13 mm,ƒ/2.2 và trường ảnh 120°, Hybrid Focus Pixels, ảnh có độ phân giải 4K",
        ],
        npc_tech: true,
        rom: [256, 512, 1024],
        ram: [8],
        chip: "Apple A18 Pro",
        sim: "Sim kép (nano-Sim và e-Sim) - Hỗ trợ 2 e-Sim",
        system: "iOS 18",
        resolution: "2868 x 1320 pixels",
        feature: [
          "Dynamic Island",
          "Màn hình Luôn Bật",
          "Công nghệ ProMotion với tốc độ làm mới thích ứng lên đến 120Hz",
          "Màn hình HDR",
          "True Tone",
          "Dải màu rộng (P3)",
          "Haptic Touch",
          "Tỷ lệ tương phản 2.000.000:1",
        ],
        cpu: "CPU 6 lõi mới với 2 lõi hiệu năng và 4 lõi hiệu suất",
      },

      description:
        "iPhone 16 Pro Max sở hữu chipset A18 Pro mạnh mẽ giúp xử lý nhanh mọi tác vụ, camera 48 MP zoom quang 5x cho ảnh nét, màn hình 6.9 inch sống động. Pin dung lượng cao của máy hỗ trợ phát video tới 33 tiếng, đáp ứng nhu cầu giải trí liên tục suốt ngày dài. Cùng với đó là thiết kế khung Titanium bền nhẹ, mang lại cảm giác sang trọng và chắc chắn khi cầm.",
      reviews: [
        {
          id: 1,
          userId: 1,
          rate: 5,
          comment:
            "Hiệu năng Siêu mạnh mẽ, Thời lượng pin Cực khủng, Chất lượng camera Chụp đẹp, chuyên nghiệp, sản phẩm tốt, chụp ảnh đẹp",
        },
      ],
      category: "phone",
      subCategory: "iphone",
      bestseller: true,
      quantity: 100,
      sold: 10,
      status: "active",
    },
    {
      id: 3,
      images: [
        productImg1,
        productImg2,
        productImg3,
        productImg4,
        productImg5,
        productImg6,
        productImg7,
        productImg8,
      ],
      price: 34990,
      price_sale: 29990,
      discount: 0,
      isSale: true,
      name: "Iphone 16 Pro Max 256GB",
      brand: "Apple",
      rate: 4.5,
      colors: [
        { img: productImg1, name: "Titan Sa mạc" },
        { img: TitanDen, name: "Titan Đen" },
        { img: TitanTrang, name: "Titan Trắng" },
        { img: TitanTuNhien, name: "Titan Tự Nhiên" },
      ],
      thong_so: {
        screen: 6.9,
        screen_tech: "Super Retina XDR OLED",
        camera_front: "12MP, ƒ/1.9, Tự động lấy nét theo pha Focus Pixels",
        camera_rear: [
          "Camera chính: 48MP, f/1.78, 24mm, 2µm, chống rung quang học dịch chuyển cảm biến thế hệ thứ hai, Focus Pixels 100%",
          "Telephoto 2x 12MP: 52 mm, ƒ/1.6",
          "Camera góc siêu rộng: 48MP, 13 mm,ƒ/2.2 và trường ảnh 120°, Hybrid Focus Pixels, ảnh có độ phân giải 4K",
        ],
        npc_tech: true,
        rom: [256, 512, 1024],
        ram: [8],
        chip: "Apple A18 Pro",
        sim: "Sim kép (nano-Sim và e-Sim) - Hỗ trợ 2 e-Sim",
        system: "iOS 18",
        resolution: "2868 x 1320 pixels",
        feature: [
          "Dynamic Island",
          "Màn hình Luôn Bật",
          "Công nghệ ProMotion với tốc độ làm mới thích ứng lên đến 120Hz",
          "Màn hình HDR",
          "True Tone",
          "Dải màu rộng (P3)",
          "Haptic Touch",
          "Tỷ lệ tương phản 2.000.000:1",
        ],
        cpu: "CPU 6 lõi mới với 2 lõi hiệu năng và 4 lõi hiệu suất",
      },

      description:
        "iPhone 16 Pro Max sở hữu chipset A18 Pro mạnh mẽ giúp xử lý nhanh mọi tác vụ, camera 48 MP zoom quang 5x cho ảnh nét, màn hình 6.9 inch sống động. Pin dung lượng cao của máy hỗ trợ phát video tới 33 tiếng, đáp ứng nhu cầu giải trí liên tục suốt ngày dài. Cùng với đó là thiết kế khung Titanium bền nhẹ, mang lại cảm giác sang trọng và chắc chắn khi cầm.",
      reviews: [
        {
          id: 1,
          userId: 1,
          rate: 5,
          comment:
            "Hiệu năng Siêu mạnh mẽ, Thời lượng pin Cực khủng, Chất lượng camera Chụp đẹp, chuyên nghiệp, sản phẩm tốt, chụp ảnh đẹp",
        },
      ],
      category: "phone",
      subCategory: "iphone",
      bestseller: true,
      quantity: 100,
      sold: 10,
      status: "active",
    },
    {
      id: 4,
      images: [
        productImg1,
        productImg2,
        productImg3,
        productImg4,
        productImg5,
        productImg6,
        productImg7,
        productImg8,
      ],
      price: 34990,
      price_sale: 29990,
      discount: 0,
      isSale: true,
      name: "Iphone 16 Pro Max 256GB",
      brand: "Apple",
      rate: 4.5,
      colors: [
        { img: productImg1, name: "Titan Sa mạc" },
        { img: TitanDen, name: "Titan Đen" },
        { img: TitanTrang, name: "Titan Trắng" },
        { img: TitanTuNhien, name: "Titan Tự Nhiên" },
      ],
      thong_so: {
        screen: 6.9,
        screen_tech: "Super Retina XDR OLED",
        camera_front: "12MP, ƒ/1.9, Tự động lấy nét theo pha Focus Pixels",
        camera_rear: [
          "Camera chính: 48MP, f/1.78, 24mm, 2µm, chống rung quang học dịch chuyển cảm biến thế hệ thứ hai, Focus Pixels 100%",
          "Telephoto 2x 12MP: 52 mm, ƒ/1.6",
          "Camera góc siêu rộng: 48MP, 13 mm,ƒ/2.2 và trường ảnh 120°, Hybrid Focus Pixels, ảnh có độ phân giải 4K",
        ],
        npc_tech: true,
        rom: [256, 512, 1024],
        ram: [8],
        chip: "Apple A18 Pro",
        sim: "Sim kép (nano-Sim và e-Sim) - Hỗ trợ 2 e-Sim",
        system: "iOS 18",
        resolution: "2868 x 1320 pixels",
        feature: [
          "Dynamic Island",
          "Màn hình Luôn Bật",
          "Công nghệ ProMotion với tốc độ làm mới thích ứng lên đến 120Hz",
          "Màn hình HDR",
          "True Tone",
          "Dải màu rộng (P3)",
          "Haptic Touch",
          "Tỷ lệ tương phản 2.000.000:1",
        ],
        cpu: "CPU 6 lõi mới với 2 lõi hiệu năng và 4 lõi hiệu suất",
      },

      description:
        "iPhone 16 Pro Max sở hữu chipset A18 Pro mạnh mẽ giúp xử lý nhanh mọi tác vụ, camera 48 MP zoom quang 5x cho ảnh nét, màn hình 6.9 inch sống động. Pin dung lượng cao của máy hỗ trợ phát video tới 33 tiếng, đáp ứng nhu cầu giải trí liên tục suốt ngày dài. Cùng với đó là thiết kế khung Titanium bền nhẹ, mang lại cảm giác sang trọng và chắc chắn khi cầm.",
      reviews: [
        {
          id: 1,
          userId: 1,
          rate: 5,
          comment:
            "Hiệu năng Siêu mạnh mẽ, Thời lượng pin Cực khủng, Chất lượng camera Chụp đẹp, chuyên nghiệp, sản phẩm tốt, chụp ảnh đẹp",
        },
      ],
      category: "phone",
      subCategory: "iphone",
      bestseller: true,
      quantity: 100,
      sold: 10,
      status: "active",
    },
    {
      id: 6,
      images: [laptop],
      price: 25490,
      price_sale: 22990,
      discount: 10,
      isSale: false,
      name: "Laptop ASUS TUF Gaming F16 FX607VJ-RL034W",
      brand: "Apple",
      rate: 4.5,
      colors: [
        { img: productImg1, name: "Titan Sa mạc" },
        { img: TitanDen, name: "Titan Đen" },
        { img: TitanTrang, name: "Titan Trắng" },
        { img: TitanTuNhien, name: "Titan Tự Nhiên" },
      ],
      thong_so: {
        screen: 6.9,
        screen_tech: "Super Retina XDR OLED",
        camera_front: "12MP, ƒ/1.9, Tự động lấy nét theo pha Focus Pixels",
        camera_rear: [
          "Camera chính: 48MP, f/1.78, 24mm, 2µm, chống rung quang học dịch chuyển cảm biến thế hệ thứ hai, Focus Pixels 100%",
          "Telephoto 2x 12MP: 52 mm, ƒ/1.6",
          "Camera góc siêu rộng: 48MP, 13 mm,ƒ/2.2 và trường ảnh 120°, Hybrid Focus Pixels, ảnh có độ phân giải 4K",
        ],
        npc_tech: true,
        rom: [256, 512, 1024],
        ram: [8],
        chip: "Apple A18 Pro",
        sim: "Sim kép (nano-Sim và e-Sim) - Hỗ trợ 2 e-Sim",
        system: "iOS 18",
        resolution: "2868 x 1320 pixels",
        feature: [
          "Dynamic Island",
          "Màn hình Luôn Bật",
          "Công nghệ ProMotion với tốc độ làm mới thích ứng lên đến 120Hz",
          "Màn hình HDR",
          "True Tone",
          "Dải màu rộng (P3)",
          "Haptic Touch",
          "Tỷ lệ tương phản 2.000.000:1",
        ],
        cpu: "CPU 6 lõi mới với 2 lõi hiệu năng và 4 lõi hiệu suất",
      },

      description:
        "iPhone 16 Pro Max sở hữu chipset A18 Pro mạnh mẽ giúp xử lý nhanh mọi tác vụ, camera 48 MP zoom quang 5x cho ảnh nét, màn hình 6.9 inch sống động. Pin dung lượng cao của máy hỗ trợ phát video tới 33 tiếng, đáp ứng nhu cầu giải trí liên tục suốt ngày dài. Cùng với đó là thiết kế khung Titanium bền nhẹ, mang lại cảm giác sang trọng và chắc chắn khi cầm.",
      reviews: [
        {
          id: 1,
          userId: 1,
          rate: 5,
          comment:
            "Hiệu năng Siêu mạnh mẽ, Thời lượng pin Cực khủng, Chất lượng camera Chụp đẹp, chuyên nghiệp, sản phẩm tốt, chụp ảnh đẹp",
        },
      ],
      category: "laptop",
      subCategory: "asus",
      bestseller: true,
      quantity: 100,
      sold: 10,
      status: "active",
    },
  ],
  phoneFeatures: [
    { label: "Điện thoại 5G", img: phone5g, value: "5g" },
    { label: "Điện thoại chụp ảnh", img: phoneCamera, value: "camera" },
    { label: "Điện thoại gập", img: phoneFold, value: "fold" },
    { label: "Điện thoại chơi game", img: phoneGaming, value: "gaming" },
    { label: "Điện thoại Nokia", img: phoneNokia, value: "nokia" },
    { label: "Điện thoại pin trâu", img: phonePin, value: "pin" },
  ],
  studentBanner: [
    { banner: StudentBanner, url: "#" },
    { banner: StudentBanner, url: "#" },
    { banner: StudentBanner, url: "#" },
    { banner: StudentBanner, url: "#" },
    { banner: StudentBanner, url: "#" },
  ],
  bankBanner: [
    {
      banner: BankBanner,
      url: "#",
      name: "Dreame T60 Ultra ra mắt: Máy lau sàn với body ultra-slim siêu mỏng, trang bị 2 tay gạt AI, lực hút 25,000Pa",
    },
  ],
  brandBanner: [
    {
      banner: BrandBanner,
      url: "#",
      name: "Dreame T60 Ultra ra mắt: Máy lau sàn với body ultra-slim siêu mỏng, trang bị 2 tay gạt AI, lực hút 25,000Pa",
    },
  ],
  blogBanner: [
    {
      banner: BlogBanner,
      url: "#",
      name: "Dreame T60 Ultra ra mắt: Máy lau sàn với body ultra-slim siêu mỏng, trang bị 2 tay gạt AI, lực hút 25,000Pa",
    },
  ],
};
