import React from 'react'

const page = async({params}) => {
    const{userId} = await params ; 

    return (
    <div>UserId is: {userId}</div>
  )
}

export default page