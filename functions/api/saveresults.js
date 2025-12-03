// Main handler function for Cloudflare Pages
export async function onRequestPost(context) {
    const { request, env } = context;
    try{
                console.log("request")

        console.log(request)
        let data;

        data = await request.text();
        console.log("data");

        // data is a string csv attach it as a file to a discord channel
        console.log(data);
        
        const discord_webhook_url = "https://discord.com/api/webhooks/1445781836742660208/dN-eosLz1ODlANXXtwZD1Bw64vI5nlUyxG18y5Qnw-8gSrt2lAbhopER6PTooNbvG3tc";
        
        // Create FormData and attach CSV file
        const formData = new FormData();
        formData.append('content', 'New Results Data:');
        formData.append('files[0]', new Blob([data], { type: 'text/csv' }), 'data.csv');
        
        await fetch(discord_webhook_url, {
            method: 'POST',
            body: formData,
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