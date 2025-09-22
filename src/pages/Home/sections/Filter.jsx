import { useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../../../features/categories/categoryes.api";
import { setSelectedProduct } from "../../../features/products/products.slice";
import { useNavigate } from "react-router-dom";

const FilterMobile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: categories, isLoading } = useGetCategoriesQuery();
  function handleFilter(category) {
    dispatch(setSelectedProduct(category));
    navigate("/products");
  }
  return (
    <div className="w-full block sm:hidden sm:w-[1200px] mx-auto px-4 py-3 mt-5">
      <div className="flex justify-between items-center gap-5 overflow-hidden">
        {isLoading ? (
          <div className="w-full h-10 bg-gray-300 animate-pulse"></div>
        ) : (
          categories.map((cate) => (
            <div
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 cursor-pointer"
              onClick={() => handleFilter(cate.name)}
            >
              <img className="w-10 rounded-sm" src={cate.img} alt="" />
              <span className="text-sm text-center ">{cate.label}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FilterMobile;
