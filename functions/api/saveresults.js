// Main handler function for Cloudflare Pages
export async function onRequestPost(context) {
    const { request, env } = context;
    try{
        let data;

        data = await request.data;

        console.log(data);
    }
    catch (error){
        console.log(error);
    }


        return new Response("something", status: 400)
  
}