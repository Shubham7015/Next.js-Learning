export async function PUT(request,{params}) {
    const data = await request.json() ; 
 
    const updatedTodo = {id:params.id , ...data} ; 

    // can write database logic here 
    return Response.json({todo:updatedTodo}) ; 
}


export async function PATCH(request,{params}) {
    const data = await request.json() ; 
 
    const updatedTodo = {id:params.id , ...data} ; 

    // can write database logic here 
    return Response.json({todo:updatedTodo}) ; 
}


export async function DELETE(request,{params}) {
    const data = await request.json() ; 
 
    const updatedTodo = {id:params.id , ...data} ; 

    // can write database logic here 
    return Response.json({todo:updatedTodo}) ; 
}