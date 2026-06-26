// export async function GET(request){
//     // return Response.json({
//     //     message: "Congrats created first backend route inside next.js and msg from next.js is Hello sir!"
//     // })

//     const res =  await fetch('https://dummyjson.com/todos') ;
//     const data = await res.json() ; 

//     return Response.json({
//         data 
//     })
// }

export async function GET(request) {
    const url = new URL(request.url) ;
    const {searchParams} = url ; 

    const apiUrl = new URL("https://jsonplaceholder.typicode.com/todos") ; 

    searchParams.forEach((value,key)=>{
        apiUrl.searchParams.append(key,value) ; 
    })

    const res = await fetch(apiUrl) ;
    const data = await res.json() ; 

    return Response.json({data}) ; 
}