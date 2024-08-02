import React from 'react'
import MobileView from './MobileView'
import { auth } from '@/auth';

const FirstSection =async  () => {

  const session = await auth();

  return (
    <div className='flex flex-col items-center p-4'>
      <div className='mt-0 lg:mt-10  page-width max-w-screen-lg section-h justify-between items-center flex flex-col gap-10 lg:flex-row'>

        <section className='  h-auto flex flex-col items-center text-center sm:items-start sm:text-left'>
          <h1 className='  text-zinc-800 mb-3 text-3xl lg:text-5xl font-bold'>Everything about you,<br/>in this link in bio.</h1>
          <h2 className='  my-3 font-medium text-gray-500 w-64 lg:w-3/4'>&nbsp;&nbsp;&nbsp;Don't enter your links in bio sections over and over again. Gather all your traffics from Instagram, Linkedin, X... in one link in bio page.</h2>
          
          <div className='my-3 flex justify-end'>
            {session ? <a
                  href={"https://www.xlyst.me/x/" + session.user.username}
                  className="p-3 rounded-xl bg-amber-400 text-black font-semibold"
                >
                  Profile
                </a> :
                <a
                  href="https://www.xlyst.me/register"
                  className="p-3 rounded-xl bg-amber-400 text-black font-semibold"
                >
                  Start for free, forever.
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
