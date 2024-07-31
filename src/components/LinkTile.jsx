import React from 'react'

const LinkTile = ({title,url,icon, onDelete,isAdmin, adminView}) => {
  return (
    <div className='flex flex-row'>
      {isAdmin && adminView &&<button onClick={onDelete}>Delete</button>}
      <li className='my-4 flex justify-center border-l-4  border-black group'>
          <a target='_blank' href={url} className='flex flex-row justify-center gap-4 m-1 p-4 items-center duration-200 rounded-r-md group-hover:bg-black'>
              <img src={icon} className='w-12 rounded-md duration-200 group-hover:bg-white object-cover aspect-square' alt="icon" />
              <h3 className='font-bold text-2xl text-black group-hover:text-white duration-200'>{title}</h3>
          </a>
      </li>
    </div>    
  )
}

export default LinkTile;
