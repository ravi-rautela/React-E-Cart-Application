import { Link } from "react-router-dom";

const cart = ({ cart, setCart }) => {
  return (
    <>
      {cart.length == 0 ? (
        <>
          <div className="relative left-44 flex flex-col gap-6 w-[83%] top-20 items-center pt-4 justify-center">
            <h1 className="text-5xl font-medium">Your Cart is Empty</h1>
            <Link
              to={"/"}
              className="bg-cyan-500 px-5 py-1 hover:bg-cyan-400 cursor-pointer text-black rounded-sm border-none outline-none transition duration-300 ease-in"
            >
              Continue Shoping...
            </Link>
          </div>
        </>
      ) : (
        <>
          {cart.map((product) => {
            return (
              <>
                <div className="relative left-44 flex w-[83%] top-20 items-center pt-4 justify-center ">
                  <div className="cards w-[700px] h-[250px] border-solid border-[1px] rounded-lg border-gray-300 p-2 shadow-md shadow-black-500/50 flex z-[-1]">
                    <div className="h-[240px] w-[100%] flex justify-center items-center">
                      <img src={product.imgSrc} alt="" className="h-[100%]" />
                    </div>
                    <div className="h-[240px] w-[100%] flex flex-col items-center justify-center text-center">
                      <div className="main-content flex flex-col justify-center items-center">
                        <h3 className="text-3xl leading-tight">
                          {product.price}
                        </h3>
                        <p className="text-xl text-gray-400 flex justify-center items-center">
                          {product.title}
                        </p>
                      </div>
                      <div className="flex gap-4 my-3 justify-center">
                        <button
                          className="px-5 py-1  rounded-sm border-solid border-[1px] border-black outline-none transition duration-300 ease-in "
                          disabled
                          title="Disabled"
                        >
                          Rs. {product.description}
                        </button>
                        <button className="bg-yellow-500 px-5 py-1 hover:bg-yellow-400  cursor-pointer text-black rounded-sm border-none outline-none transition duration-300 ease-in">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="container relative left-35 text-center my-4 block m-auto top-20 ">
            <button
              className="pt-2 bg-red-500 px-5 py-1 hover:bg-red-400  cursor-pointer rounded-sm border-none outline-none transition duration-300 ease-in text-white"
              onClick={() => setCart("")}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default cart;
