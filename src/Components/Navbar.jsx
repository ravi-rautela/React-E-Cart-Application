import { useState } from "react";
import { items } from "./Data";
import { Link, useNavigate, useLocation } from "react-router-dom";
const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  return (
    <>
      <div className="navbar z-10 fixed w-[100%] flex justify-between py-3 px-5 bg-gray-200 items-center">
        <Link to={"/"} className="text-lg font-medium">
          E-cart Application
        </Link>
        <form
          onSubmit={handleSubmit}
          className="w-[300px] lg:w-[600px] flex justify-center items-center"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Item..."
            className="w-[100%] p-1 rounded-md pl-3 border-none outline-none text-gray-500"
            autoComplete="off"
          />
        </form>
        <div className="">
          <Link
            to={"/cart"}
            className="flex p-[5px] justify-center items-center mb-[-12px] font-semibold"
          >
            {cart.length}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {location.pathname == "/" && (
        <div className="flex fixed bg-gray-100 p-2 flex-col w-[160px] h-[590px] top-14 items-center z-9">
          <div className="font-medium p-2 mb-8">Filter By: </div>
          <div
            className="cursor-pointer rounded-sm bg-white w-[100%] p-1 flex justify-center  font-medium"
            onClick={() => setData(items)}
          >
            All
          </div>
          <div
            className="cursor-pointer active:bg-white w-[100%] p-1 flex justify-center hover:bg-white my-2 "
            onClick={() => filterByCategory("mobiles")}
          >
            Apply
          </div>
          <div
            className="cursor-pointer hover:bg-white my-2 active:bg-white w-[100%] p-1 flex justify-center"
            onClick={() => filterByCategory("laptops")}
          >
            Sumsung
          </div>
          <div
            className="cursor-pointer hover:bg-white my-2 active:bg-white w-[100%] p-1 flex justify-center"
            onClick={() => filterByCategory("tablets")}
          >
            Nokia
          </div>
          <div className="cursor-pointer hover:bg-white my-2 active:bg-white w-[100%] p-1 flex justify-center">
            Vivo
          </div>
          <div className="cursor-pointer hover:bg-white my-2 active:bg-white w-[100%] p-1 flex justify-center">
            Redmi
          </div>
          <div className="cursor-pointer hover:bg-white my-2 active:bg-white w-[100%] p-1 flex justify-center">
            One Plus
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
