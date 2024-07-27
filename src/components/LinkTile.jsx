import React from 'react'

const LinkTile = ({title,url,icon}) => {
  return (
    <li className='m-2 flex justify-center'>
        <a target='_blank' href={url} className='flex flex-row justify-center gap-4 m-1 p-4 items-center group duration-200 rounded-xl hover:bg-black'>
            <img src={icon} className='w-10 rounded-md object-cover aspect-square' alt="icon" />
            <h3 className='font-semibold text-xl text-black group-hover:text-white'>{title} linkim</h3>
        </a>
    </li>
  )
}

export default LinkTile