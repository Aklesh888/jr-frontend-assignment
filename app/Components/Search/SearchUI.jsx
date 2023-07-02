import React, { useState, useRef, useEffect } from "react";
import SearchPopup from "./SearchPopup";
import { Search } from "react-feather";

const SearchUI = ({ setShowPopup }) => {
  const [isSearchClicked, setSearchClicked] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchClicked(false);
      setShowPopup(false);
    }
  };

  const handleSearchClick = () => {
    setSearchClicked(!isSearchClicked);
    setShowPopup(!isSearchClicked);
  };

  return (
    <div className="flex-col flex justify-center items-center text-gray-600" ref={searchRef}>
      <div
        className={`flex justify-around items-center h-12 w-48 bg-zinc-100 rounded-md text-center text-xl cursor-pointer ${
          isSearchClicked ? "hidden" : "block"
        }`}
        onClick={handleSearchClick}
      >
        <Search />
        <div className="font-semibold">Search</div>
        <div className="w-[30%] outline-1 border border-zinc-400 rounded-md">
          Ctrl K
        </div>
      </div>
      <div className="">{isSearchClicked && <SearchPopup />}</div>
    </div>
  );
};

export default SearchUI;
