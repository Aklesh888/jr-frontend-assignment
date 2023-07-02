"use client";
import React, { useEffect, useState, useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchResult from "../app/Components/Search/SearchResult";
import SearchUI from "../app/Components/Search/SearchUI";
import "./globals.css";
import music from "../assets/music.jpg";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  const searchRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <html lang="en">
      <head></head>
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="flex justify-between py-5 mx-48 max-h-[96px]">
            <div className="flex items-center">
              <img src={music} className="h-10 w-10" alt="" />
              <div className="text-4xl text-center h-[30px]">Music Sansar</div>
            </div>
            <div ref={searchRef}>
              <SearchUI setShowPopup={setShowPopup} />
              {showPopup && <SearchResult />}
            </div>
          </div>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
