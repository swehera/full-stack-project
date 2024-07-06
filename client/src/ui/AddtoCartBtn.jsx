import { twMerge } from "tailwind-merge";

const AddtoCartBtn = ({ className, title, product }) => {
  const newClassName = twMerge(
    " uppercase bg-[#f7f7f7] text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-300 cursor-pointer",
    className
  );
  return (
    <button className={newClassName}>{title ? title : "add to cart"}</button>
  );
};

export default AddtoCartBtn;
