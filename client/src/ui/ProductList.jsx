import { Link } from "react-router-dom";
import Container from "./Container";
import Title from "./Title";
import Pagination from "./Pagination";

const ProductList = () => {
  return (
    <Container>
      <div className=" mb-10">
        <div className=" flex items-center justify-between">
          <Title text="Top Sells Products" />
          <Link to={"/product"}>View All Products</Link>
        </div>
        <div className=" w-full h-[1px] bg-gray-200 mt-3" />
      </div>
      {/* pagination */}
      <Pagination />
    </Container>
  );
};

export default ProductList;
