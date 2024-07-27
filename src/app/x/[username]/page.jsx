import LinkTile from '@/components/LinkTile'
import React from 'react'

const Page = ({params}) => {
    const title = "x";
    const url = "https://www.x.com/_erayl";
    const icon = "https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png"
    
    

    return (
        <div className='m-2'>
                <ul className='flex flex-col items-center'>
                    <li className="mt-10">
                        <h1 className='m-4 text-3xl font-bold'>
                            <span className='m-1 text-2xl font-extrabold'>$</span>{params.username}
                        </h1>
                    </li>
                    <li className='w-full flex justify-center'>
                        <ul className='flex flex-col items-start'>
                            <LinkTile title={title} url={url} icon={icon}/>
                            <LinkTile title={"instagram"} url={url} icon={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"}/>
                        </ul>
                    </li>
                </ul>
        </div>
    )
}

export default Page