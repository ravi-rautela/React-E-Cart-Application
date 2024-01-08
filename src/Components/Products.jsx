import { Link } from "react-router-dom";
  import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  
const Products = ({ items, cart, setCart }) => {
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
      <div className="absolute top-16 left-44 flex flex-wrap items-center justify-center gap-3 py-3">
        {items.map((item, index) => {
          return (
            <>
              <div
                className="cards w-[300px] h-[250px] border-solid border-[1px] rounded-lg border-gray-300 p-2 shadow-md shadow-black-500/50 "
                key={index}
              >
                <Link to={`/product/${item.id}`}>
                  <div className="h-[140px] w-[100%] flex justify-center items-center ">
                    <img src={item.imgSrc} alt="" className="h-[100%]" />
                  </div>
                </Link>
                <div className="main-content flex flex-col justify-center items-center">
                  <h3 className="text-md">{item.title}</h3>
                  <p className="text-sm flex justify-center items-center">
                    {item.description}
                  </p>
                </div>
                <div className="flex gap-4 my-3 justify-center">
                  <button
                    className="px-5 py-1  rounded-sm border-solid border-[1px] border-black outline-none transition duration-300 ease-in "
                    disabled
                    title="Disabled"
                  >
                    Rs. {item.price}
                  </button>
                  <button
                    className="bg-yellow-500 px-5 py-1 hover:bg-yellow-400 cursor-pointer text-black rounded-sm border-none outline-none transition duration-300 ease-in"
                    onClick={() =>
                      addToCart(
                        item.id,
                        item.title,
                        item.description,
                        item.price,
                        item.imgSrc
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
