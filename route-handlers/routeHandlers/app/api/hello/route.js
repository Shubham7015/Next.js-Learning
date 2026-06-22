export async function GET(request){
    // return Response.json({
    //     message: "Congrats created first backend route inside next.js and msg from next.js is Hello sir!"
    // })

    const res =  await fetch('https://dummyjson.com/todos') ;
    const data = await res.json() ; 

    return Response.json({
        data 
    })
}