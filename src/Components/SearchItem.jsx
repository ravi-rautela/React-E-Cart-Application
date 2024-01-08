import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Products from "./Products";
const SearchItem = () => {
  const [filterData, setFilterData] = useState([]);
  const { term } = useParams();
  useEffect(() => {
    const filterData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(data);
    };
    filterData();
  }, [term]);

  return (
    <>
      <div className="absolute top-16 left-44 flex flex-wrap gap-3 justify-around py-3">
        <Products items={filterData} />
      </div>
    </>
  );
};

export default SearchItem;
