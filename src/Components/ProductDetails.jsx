import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    toast.success("Item added on cart ", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedProduct = items.filter(
      (pro) => pro.category === product.category
    );
    setRelatedProduct(relatedProduct);
  }, [id]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="relative left-44 flex gap-3 w-[83%] h-screen items-center justify-center py-3 flex-col">
        <div className="cards w-[800px] h-[350px] border-solid border-[1px] rounded-lg border-gray-300 p-2 shadow-md shadow-black-500/50 flex">
          <div className="h-[340px] w-[100%] flex justify-center items-center">
            <img src={product.imgSrc} alt="" className="h-[100%]" />
          </div>
          <div className="h-[340px] w-[100%] flex flex-col items-center justify-center text-center">
            <div className="main-content flex flex-col justify-center items-center">
              <h3 className="text-5xl leading-tight">{product.title}</h3>
              <p className="text-xl text-gray-400 flex justify-center items-center">
                {product.description}
              </p>
            </div>
            <div className="flex gap-4 my-3 justify-center">
              <button
                className="px-5 py-1  rounded-sm border-solid border-[1px] border-black outline-none transition duration-300 ease-in "
                disabled
                title="Disabled"
              >
                Rs. {product.price}
              </button>
              <button
                className="bg-yellow-500 px-5 py-1 hover:bg-yellow-400 cursor-pointer text-black rounded-sm border-none outline-none transition duration-300 ease-in"
                onClick={() =>
                  addToCart(
                    product.id,
                    product.title,
                    product.description,
                    product.price,
                    product.imgSrc
                  )
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Products items={relatedProduct} />
    </>
  );
};

export default ProductDetails;
