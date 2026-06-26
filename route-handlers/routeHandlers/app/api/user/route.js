'use server'
import { headers, cookies } from "next/headers";

export async function GET(request){
    // const newHeader = await headers() ; 
    // // const username = request.cookies.get("username") ; // tradional approach 

    // // by function providing by next.js (cookie())

    // const cookieData = await cookies() ; 
    // cookieData.set("time",Date.now()) ; 

    // //1. 1st way to read request headers 
    // // const newHeader = new Headers(request.Headers) ; 
    // // console.log(newHeader.get("user-agent")) ; 

    // // console.log(username) ; 

    // const time = cookieData.get("time") ; 
    // console.log(JSON.stringify(time.value)) ; 
    const cookieStore = await cookies() ; 

//     cookieStore.set({
//     name: 'name',
//     value: 'lee',
//     httpOnly: true,
//     path: '/user',
//   })
//   cookieStore.delete('name') ;

 cookieStore.set('name', '')

    return new Response("<h1>Hello next.js</h1>", {
        headers : {
            "content-type" : "text/html",
            "set-cookie" : "username=ShubhamRohilla"
        }
    })
}
