// Main handler function for Cloudflare Pages
export async function onRequestPost(context) {
    const { request, env } = context;
    try{
                console.log("request")

        console.log(request)
        let data;

        data = await request.text();
        console.log("data");

        // data is a string csv attach it as a webhook to a discord channel
        console.log(data);
        
        const discord_webhook_url = "https://discord.com/api/webhooks/1445781836742660208/dN-eosLz1ODlANXXtwZD1Bw64vI5nlUyxG18y5Qnw-8gSrt2lAbhopER6PTooNbvG3tc";
        await fetch(discord_webhook_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: `New Results Data:\n\`\`\`csv\n${data}\n\`\`\``,
            }),
        });
        
        return new Response(JSON.stringify({
            status: 2000,
        }), {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Content-Type': 'application/json',
            }
        });

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