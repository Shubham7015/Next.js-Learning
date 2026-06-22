export async function POST(request){

const body = request.json() ;
const{title,completed} = body ; 


return Response.json({
    sucess:true ,
    message:"todo created successfully",
    todo : {
        title,
        completed 
    }
})

}