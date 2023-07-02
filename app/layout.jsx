"use client";
import React, { useEffect, useState, useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchResult from "../app/Components/Search/SearchResult";
import SearchUI from "../app/Components/Search/SearchUI";
import "./globals.css";
import music from "../assets/music.jpg";
import Link from "next/link";
import {Music} from "react-feather"

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
              <Music size={35} className="mt-4"/>
              <Link href={'/'} className="text-4xl text-center h-[30px]">Music Sansar</Link>
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
