"use client";
import React from "react";
import { useQuery, QueryClientProvider, QueryClient } from "react-query";
import AlbumCard from "./Components/AlbumCard";
import fetchArtists from "../lib/fetchTopCharts";
import {Loader} from 'react-feather'

const queryClient = new QueryClient();

function Page() {
  const { data, isLoading, isError } = useQuery("top-charts", fetchArtists);

  if (isLoading) return <p className="flex justify-center items-center m-40"><Loader className=" animate-spin self-center" size={60}/></p>;
  if (isError) return <p>Error :</p>;

  return (
    <div className="bg-gray-800 flex flex-col items-center">
      <div className="text-center text-3xl bg-gray-500 p-5 rounded-md m-3"> Top charts this week</div>
      <div className="flex flex-wrap justify-center gap-4 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-hover:bg-gray-300 scrollbar-track-hover:bg-gray-300  ">
        {data.map((album) => (
          <AlbumCard
            id={album.item.id}
            key={album.item.id}
            artist={album.item.artist.name}
            title={album.item.name}
            img={album.item.cover_art_url}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
}
