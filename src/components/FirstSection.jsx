import React from 'react'
import MobileView from './MobileView'
import { auth } from '@/auth';

const FirstSection =async  () => {

  const session = await auth();

  return (
    <div className='flex flex-col items-center p-4 sm:p-8'>
      <div className='  page-width max-w-screen-lg section-h justify-between items-center flex flex-col gap-10 lg:flex-row'>
      
        <section className='  h-auto flex flex-col items-center text-center sm:items-start sm:text-left'>
          <h1 className='  text-zinc-800 my-3 text-3xl lg:text-5xl font-bold'>Simple:<br/> Everything about you, in one place.</h1>
          <h2 className='  my-3 font-medium text-gray-500 w-64 lg:w-3/4'>&nbsp;&nbsp;&nbsp;No need to re enter every link you have in to the bio sections. No needless design, no useless tools. Simple, elegant and usefull. With this, save time.</h2>
          
          <div className='my-3 flex justify-end'>
            {session ? <a
                  href={"https://platinleaf.vercel.app/x/" + session.user.username}
                  className="p-3 rounded-xl bg-amber-400 text-black font-semibold"
                >
                  Profile
                </a> :
                <a
                  href="https://platinleaf.vercel.app/register"
                  className="p-3 rounded-xl bg-amber-400 text-black font-semibold"
                >
                  Register, now
                </a>
                }
          </div>
        </section>
        
        <section className='  flex flex-col items-center sm:items-start'>
          <MobileView/>
        </section>

      </div>
    </div>
  )
}

export default FirstSection
