import React from 'react'

const LinkTile = ({title,url,icon, onDelete,isAdmin, adminView}) => {
  return (
    <div className='flex flex-row'>
      {isAdmin && adminView &&<button onClick={onDelete} className='text-center bg-red-300 p-3 font-semibold'>Delete</button>}
      <li className='m-2 flex justify-center border-l-4  border-black group'>
          <a target='_blank' href={url} className='flex flex-row justify-center gap-4 m-1 p-4 items-center duration-200 rounded-r-md group-hover:bg-black'>
              <img src={icon} className='w-10 rounded-md object-cover aspect-square' alt="icon" />
              <h3 className='font-semibold text-xl text-black group-hover:text-white duration-200'>{title}</h3>
          </a>
      </li>
    </div>    
  )
}

export default LinkTile;
