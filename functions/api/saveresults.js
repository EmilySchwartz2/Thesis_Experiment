// Main handler function for Cloudflare Pages
export async function onRequestPost(context) {
    const { request, env } = context;
        let data;

        data = await request.data;

        console.log(data);
  
}