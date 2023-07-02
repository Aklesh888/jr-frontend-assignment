import React from 'react'
import Link from 'next/link'

const AlbumCard = (props) => {
  return (
    <Link href={`/SearchResults/${props.id}`} key={props.id} className='flex flex-col p-3 m-3 h-[400px] justify-center w-[300px] space-y-5 bg-gray-300 rounded-lg items-center text-center hover:bg-gray-400'>
        <img className=' h-56 w-56 rounded-sm' src={props.img} alt="" />
        <div className=' font-bold'>{props.title}</div>
        <div className=' text-sm text-gray-600'>{props.artist}</div>
    </Link>
  )
}

export default AlbumCard