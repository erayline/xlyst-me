import React from 'react'

const FirstSection = () => {
  return (
    <div className='flex flex-col items-center p-4 sm:p-8'>
      <div className='page-width max-w-screen-lg section-h justify-between items-center flex flex-col lg:flex-row'>
      
        <section className='h-auto flex flex-col items-center text-center sm:items-start sm:text-left'>
          <h1 className='text-white m-3 text-2xl sm:text-3xl font-bold'>Eggable: merge, relax and listen!</h1>
          <h2 className='m-3 font-medium text-gray-500 w-64 sm:w-96'>You can merge endlessly. Also you can upgrade, prestige and relax endlessly too</h2>
          <a href='https://play.google.com/store/apps/details?id=com.folinx.eggable' target='_blank' className='m-3 p-3 w-28 sm:w-32 text-center font-bold bg-yellow-500 rounded-xl hover:rounded-sm hover:bg-white select-none'>PlayStore</a>
        </section>
        
        <section className='flex flex-col items-center sm:items-start'>
          <h2 className='text-white text-xl sm:text-2xl m-3'>Some eggs🐣</h2>
          <div className='flex flex-col justify-center sm:justify-start'>
            <div className='flex flex-row'>
              <img className='hover:bg-orange-500 duration-150 rounded-xl w-24 h-24 sm:w-40 sm:h-40 p-3 m-2' src="images\74.png" alt="" />
              <img className='hover:bg-orange-500 duration-150 rounded-xl w-24 h-24 sm:w-40 sm:h-40 p-3 m-2' src="images\49.png" alt="" />
            </div>
            <div className='flex flex-row'>
              <img className='hover:bg-orange-500 duration-150 rounded-xl w-24 h-24 sm:w-40 sm:h-40 p-3 m-2' src="images\83.png" alt="" />
              <img className='hover:bg-orange-500 duration-150 rounded-xl w-24 h-24 sm:w-40 sm:h-40 p-3 m-2' src="images\84.png" alt="" />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default FirstSection
