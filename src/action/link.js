import { auth } from "@/auth";

const addLink = async (formData)=>{
    const title = formData.get('title');
    const url = formData.get('url');
    let userId = await auth();
    userId = userId.user.id;

    const response = await fetch("https://platinleaf.vercel.app/api/link/addLink",{
        method:"POST",
        body:{
            title:title,
            url:url,
            userId:userId
        }
    })

    console.log(response);
    
    // buraya endpoint gelecek.

}
export {addLink};
