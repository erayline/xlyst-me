import { loginUser, registerUser } from '@/action/user'
import { auth, signOut } from '@/auth'
import React from 'react'

const LoginRegister = async () => {
  const session = await auth();
  if(session) console.log(session.user);




  return (

    <div className='w-full h-screen flex flex-col m-10 gap-10 items-center justify-center'>
        {session?(
          <form action={async ()=>{
            "use server"
            await signOut()
          }} className='flex flex-col border-2 justify-center gap-2'>
              <button type='submit'>logout</button>
          </form>
        ):
        (<>
        
        <form action={registerUser} className='flex flex-col border-2 justify-center gap-2'>
            <h2>register</h2>
            <input placeholder='email' type="email" name="email" id="email" />
            <input placeholder="****" type="password" name="password" id="password" />
            <input placeholder="age" type="text" name="age" id="age"/>
            <button type='submit'>signup</button>
        </form>

        <form action={loginUser} className='flex flex-col border-2 justify-center gap-2'>
            <h2>login</h2>
            <input placeholder='email' type="email" name="email" id="email" />
            <input placeholder="****" type="password" name="password" id="password" />
            <button type='submit'>login</button>
        </form>

        </>)
        }

        

        


    </div>
  )
}

export default LoginRegister