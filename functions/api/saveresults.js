// Main handler function for Cloudflare Pages
export async function onRequestPost(context) {
    const { request, env } = context;
    try{
                console.log("request")

        console.log(request)
        let data;

        data = await request.text;
        console.log("data");

        console.log(data);
    }
    catch (error){
        context.log("error")
        console.log(error);
    }


       return new Response(JSON.stringify({
            status: 5000,
            
        }), {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Content-Type': 'application/json',
            }
        });

  
}