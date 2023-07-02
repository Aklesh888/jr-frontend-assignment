"use client"
import { useQuery } from 'react-query';
import fetchAlbum from '../../../lib/fetchSingleAlbum';

const SearchResults = (props) => {
  const id = props.params.id;
  const { data, status } = useQuery("album", () => fetchAlbum(id));

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching album data</div>;
  }

  if (!data) {
    return null;
  }
  console.log(data);

  return (
    <div className='flex flex-col items-center p-5 space-y-4 bg-gray-700'>
      <div className='text-3xl font-bold'>{data.album.full_title}</div>
      <img className='h-[350px] w-[400px]' src={data.album.cover_art_url} alt={data.album.title} />
      <div className='text-2xl font-medium'>Artist: {data.album.artist.name}</div>
      <div className=' m-5 max-w-[800px] bg-black p-8 rounded-lg'>{data.album.description_preview}</div>
      <div className=''>Release Date: {data.album.release_date}</div>
      
    </div>
  );
};

export default SearchResults;
