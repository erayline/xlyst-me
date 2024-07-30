import React from 'react'

const Footer = () => {
  return (
    <div className='w-11/12 mt-10 h-32 border-t-2 border-zinc-700  flex flex-row justify-around'>
        <div>
            <h3 className='text-zinc-500 underline text-center'>More</h3>
            <ul className='text-zinc-400 gap-4 my-4 text-center flex flex-col'>
                <li><a href="https://eggable-mobile.vercel.app/">🐣 Eggable</a></li>
                <li><a href="https://platinleaf.vercel.app/">🍸 Prestige List</a></li>
            </ul>
        </div>
        <div>
            <h3 className='text-zinc-500 underline  text-center'>Me</h3>
            <ul className='text-zinc-400 gap-4 my-4 text-center flex flex-col'>
                <li><a href="https://x.com/_erayl/bio">Portfolio</a></li>
                <li><a href="https://x.com/_erayl">𝕏 link</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer