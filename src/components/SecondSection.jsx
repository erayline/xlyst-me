import React from 'react'

const SecondSection = () => {

  return (
    <div className='flex flex-col items-center p-4'>
      <div className='mt-0 lg:mt-10  page-width max-w-screen-lg section-h justify-between items-center flex flex-col gap-10 lg:flex-row'>
      
      <div className='hidden lg:flex'>
            <iframe height={500} width={650} src="https://www.youtube.com/embed/gbngh_Os03k" title="link in bio tool" frameborder="3" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className='flex lg:hidden'>
            <iframe height={200} width={300} src="https://www.youtube.com/embed/gbngh_Os03k" title="link in bio tool" frameborder="3" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      </div>
    </div>
  )
}

export default SecondSection
