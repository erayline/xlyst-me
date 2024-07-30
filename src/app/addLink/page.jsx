"use client";

import { useSession } from "next-auth/react";
import { addLink } from "@/action/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const { data: session, status } = useSession();
  const [iconUrl, setIconUrl] = useState("");
  const urlList = ["behance.png", "blogger.png", "digg.png", "discord.png","dribbble.png","dropbox.png"]
  const [adding, setAdding] = useState('Add');

  const router = useRouter();


  // Redirect if not authenticated
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  if (status === "loading") {
    return <div className="m-10 text-center">Loading...</div>;
  }

  function iconOnClick(displayUrl){
    console.log("iconUrl")
    setIconUrl(displayUrl)
  }
  const chosenIcon = urlList.map((element,index) => {
    let displayUrl = "/icons/" + element;
    
    return (<button key={index} type="button" onClick={() => {
      console.log(displayUrl)
      setIconUrl(displayUrl)
    }}>
      {displayUrl === iconUrl ? 
      <img className="w-10 h-10 bg-red-600 m-1 p-1 rounded-lg cursor-pointer"  src={displayUrl} alt="" />
        :
      <img className="w-10 h-10 bg-white m-1 p-1 rounded-lg cursor-pointer"  src={displayUrl} alt="" />
    }
    </button>)
  })
  return (
    <div className='w-full flex flex-col my-32 items-center justify-center'>
      <form action={addLink} className='max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center items-center border-4 p-4 md:p-10 border-primary rounded'>
        <h2 className='font-bold text-2xl md:text-3xl underline underline-offset-8 m-4'>Add a Link</h2>
        <input className='w-full p-2 mb-4 border rounded' placeholder='Title(X, my products...)' type="text" name="title" id="title" required />
        <input className='w-full p-2 mb-4 border rounded' placeholder="url" type="text" name="url" id="url" required />
        <div className="w-56 justify-center flex flex-row flex-wrap h-36 mb-4 overflow-x-hidden bg-black rounded-xl overflow-scroll">
          {chosenIcon}
        </div>
        <input type="hidden" name="iconUrl" id="iconUrl" value={iconUrl}/>
        <input type="hidden" name="username" id="username" value={session.user.username} />
        <button onClick={()=>setAdding("⏳")} className='bg-black text-white p-2 rounded w-full' type='submit'>{adding}</button>
      </form>
    </div>
  );
};

export default Register;