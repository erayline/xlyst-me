// import { auth } from "@/auth";

const addLink = async (formData) => {
    const title = formData.get('title');
    const url = formData.get('url');
    const userId = formData.get('userId');

    const response = await fetch("/api/link/addLink", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            url,
            userId
        })
    });

    const data = await response.json();
    if (data.success) {
        // handle success
    } else {
        // handle error
    }
};

export { addLink };
