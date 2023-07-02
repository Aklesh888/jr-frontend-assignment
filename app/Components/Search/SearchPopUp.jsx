import React, { useState } from "react";
import { Search } from "react-feather";
import { useQuery } from "react-query";
import SearchResult from "./SearchResult";
import { Loader } from "react-feather";
import fetchSearchResults from "../../../lib/fetchSearchResults";

const SearchPopup = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading } = useQuery(["searchResults", searchTerm], () =>
    fetchSearchResults(searchTerm)
  );
  
  const popupHeight = searchTerm === '' ? "" : "h-[500px]";

  return (
    <div className={`flex rounded-md md:w-[500px] flex-col bg-white transition-all right-20 top-5 absolute `}>
      <div className="px-4 m-4 h-12 w-30vw flex justify-between rounded border border-blue-400">
        <div className="flex justify-center items-center">
          <Search />
          <input
            className="px-5 lg:w-[20vw] md:w-[30vw] placeholder:text-xl placeholder:text-zinc-400 h-6 outline-none"
            type="text"
            value={searchTerm}
            placeholder="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          
        </div>
      </div>
      <div className={`flex flex-col items-center justify-center ${popupHeight} overflow-auto`}>
        {isLoading ? (
          <Loader className="animate-spin" color="black" size={40} />
        ) : (
          data &&
          data.map((item) => (
            <SearchResult
              key={item.id}
              artist_name={item.result.artist_names}
              img={item.result.song_art_image_url}
              name={item.result.title}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPopup;
