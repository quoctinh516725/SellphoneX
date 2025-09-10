export const FormatPrice = (price) => {
  return (price * 1000).toLocaleString("vi-VN") + "đ";
};
