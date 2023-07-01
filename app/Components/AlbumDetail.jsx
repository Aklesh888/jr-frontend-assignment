import React from "react";

function AlbumDetailPage({ album }) {
  return (
    <div>
      <h2>{album.artist}</h2>
      <h3>{album.album}</h3>

    </div>
  );
}

export default AlbumDetailPage;
