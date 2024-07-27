import { auth } from "@/auth";

const addLink = async (formData)=>{
    const title = formData.get('title');
    const url = formData.get('url');

    const session = await auth();
    console.log(session)
    // const response = await fetch("https://platinleaf.vercel.app/api/link/addLink",{
    //     method:"POST",
    //     body:{
    //         title:title,
    //         url:url,
    //     }
    // })
    
    // buraya endpoint gelecek.

}
export {addLink};
