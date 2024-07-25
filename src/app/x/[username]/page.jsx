"use server"

import connectDB from '@/api/lib/db'
import { userLink } from '@/models/userLink';
import { User } from '@/models/user';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

async function getUserWithLinks(username) {
  await connectDB();
  try {
    const person = await User.findOne({ username }).lean();
    if (!person) return null;

    const personLinks = await userLink.find({ user: person._id }).lean();
    return { ...person, links: personLinks };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

const Profile = async ({ params }) => {
  const session = await auth();
  const userData = await getUserWithLinks(params.username);

  if (!userData) redirect("/");

  const linkListesi = userData.links.map((element, index) => (
    <li key={index} className='border-4 border-primary rounded m-2 hover:bg-primary hover:text-white'>
      <a className='flex flex-row p-4 gap-2 justify-center w-64' href={element.url}>
        <h4 className='text-xl font-bold'>{element.title}</h4>
      </a>
    </li>
  ));

  return (
    <div className='w-full flex flex-col my-8 items-center justify-center'>
      {session && session.user.username === params.username && <div>This is your profile</div>}
      
      <div className='flex flex-col justify-center items-center '>
        <h2 className='font-bold text-2xl md:text-3xl underline underline-offset-8 m-4'>@{userData.username}</h2>
        <ul className=''>
          {linkListesi}
        </ul>
      </div>
    </div>      
  );
}

export default Profile;