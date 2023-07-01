"use client"
import React from "react";
import { useQuery, QueryClientProvider, QueryClient } from "react-query";
import AlbumCard from "./Components/AlbumCard";
import fetchArtists from "../lib/fetchTopCharts";

const queryClient = new QueryClient();

function Page() {
  const { data, isLoading, isError } = useQuery("top-charts", fetchArtists);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :</p>;

  console.log(data);

  return (
    <div className="">
      <h1 className="">Top Charts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((album) => (
          <AlbumCard key={album.item.id} artist={album.item.artist.name} album={album.item.name} img={album.item.cover_art_url}/>
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
