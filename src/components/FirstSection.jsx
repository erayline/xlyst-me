import React from 'react'

const FirstSection = () => {
  return (
    <div className='flex flex-col items-center p-4 sm:p-8'>
      <div className='page-width max-w-screen-lg section-h justify-between items-center flex flex-col lg:flex-row'>
      
        <section className='h-auto flex flex-col items-center text-center sm:items-start sm:text-left'>
          <h1 className='text-white m-3 text-2xl sm:text-3xl font-bold'>Everything about you, In one place</h1>
          <h2 className='m-3 font-medium text-gray-500 w-64 sm:w-96'>If you are eligible, you will have this.</h2>
        </section>
        
        <section className='flex flex-col items-center sm:items-start'>
          <h2 className='text-white text-xl sm:text-2xl m-3'>🍸</h2>
          <div className='flex flex-col justify-center sm:justify-start'>
            <p>buraya uygulamanın showcase'i konulacak</p>
          </div>
        </section>

      </div>
    </div>
  )
}

export default FirstSection
