export default function useFilter({
  products,
  selectedProduct,
  priceRange,
  useProduct,
  searchKey,
  brandProduct,
}) {
  const filterProducts = products?.filter((p) => {
    return (
      (!brandProduct || p.brand === brandProduct) &&
      (!selectedProduct || p.category === selectedProduct) &&
      (!searchKey || p.name.toLowerCase().includes(searchKey.toLowerCase())) &&
      p.price_sale >= priceRange[0] &&
      p.price_sale <= priceRange[1]
    );
  });
  return filterProducts;
}
