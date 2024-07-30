import React from 'react'

const LinkTile = ({title,url,icon, onDelete,isAdmin}) => {
  return (
    <div className='flex flex-row'>
      {isAdmin && <button onClick={onDelete}>Delete</button>}
      <li className='m-2 flex justify-center border-l-4  border-black group'>
          <a target='_blank' href={url} className='flex flex-row justify-center gap-4 m-1 p-2 items-center duration-200 rounded-r-md group-hover:bg-black'>
              <img src={icon} className='w-6 rounded-md object-cover aspect-square' alt="icon" />
              <h3 className='font-semibold text-lg text-black group-hover:text-white duration-200'>{title}</h3>
          </a>
      </li>
    </div>
  )
}



const MobileView = () => {
  return (
    <div className='border-4 bg-zinc-300 border-zinc-800 w-56 h-96 rounded-3xl flex flex-col items-center'>
        <h3 className='text-center m-5 text-2xl font-bold'>$ Eray</h3>
        <div className='flex flex-col w-30'>
          <LinkTile title={"X"} url={"www.x.com/_erayl"} icon={"https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png"}/>
          <LinkTile title={"Eggable"} url={"eggable-mobile.vercel.app"} icon={"https://eggable-mobile.vercel.app/ico.png"}/>
        </div>
        <img className='w-24 rounded-xl border-4 border-zinc-700 mt-5' src="https://i.pinimg.com/564x/be/0c/64/be0c64fa3f2760f33e15ea333f80b288.jpg" alt="image describes you" />
    </div>
  )
}

export default MobileView