import LinkTile from '@/components/LinkTile'
import React from 'react'

const Page = ({params}) => {
    const title= "x";
    const url="https://www.x.com/_erayl";
    const icon="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png"

    return (
    <div className='m-2 border-2'>
        <div className='border-2'>
            <ul>
                <LinkTile title={title} url={url} icon={icon}/>
                <LinkTile title={title} url={url} icon={icon}/>
                {/* {params.username} */}
            </ul>
        </div>
    </div>
  )
}

export default Page