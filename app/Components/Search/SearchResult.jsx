import React from "react";

const SearchResult = (props) => {
  return (
    <div className="flex flex-row text-gray-600 w-full">
      <img src={props.img} alt="" className="h-[100px] w-[150px]" />
      <div className="flex flex-col px-10 bg-zinc-200 hover:bg-zinc-300 rounded-md h-32 w-full">
        <div className="text-xl font-bold">{props.name} </div>
        <div className="text-sm text-gray-500">{props.artist_name}</div>
      </div>
    </div>
  );
};

export default SearchResult;
