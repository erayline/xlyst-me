import { auth } from "@/auth";

const addLink = async (formData)=>{
    const title = formData.get('title');
    const url = formData.get('url');
    const userId = await auth();

    console.log(userId);
    // buraya endpoint gelecek.

}
export {addLink};
