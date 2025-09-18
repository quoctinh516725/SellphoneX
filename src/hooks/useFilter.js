import { useSelector } from "react-redux";

export default function useFilter({
  products,
  selectedProduct,
  priceRange,
  useProduct,
  searchKey,
  brandProduct,
}) {
  const { sortProduct } = useSelector((state) => state.products);

  const filterProducts = products?.filter((p) => {
    return (
      (!useProduct || p.use === useProduct) &&
      (!brandProduct || p.brand === brandProduct) &&
      (!selectedProduct || p.category === selectedProduct) &&
      (!searchKey || p.name.toLowerCase().includes(searchKey.toLowerCase())) &&
      p.price_sale >= priceRange[0] &&
      p.price_sale <= priceRange[1]
    );
  });
  switch (sortProduct) {
    case "rate":
      filterProducts?.sort((a, b) => b.rate - a.rate);
      break;
    case "hot-deals":
      filterProducts?.sort((a, b) => b.discount - a.discount);
      break;
    case "low-to-high":
      filterProducts?.sort((a, b) => a.price - b.price);
      break;
    case "high-to-low":
      filterProducts?.sort((a, b) => b.price - a.price);
      break;

    default:
      break;
  }

  return filterProducts;
}
