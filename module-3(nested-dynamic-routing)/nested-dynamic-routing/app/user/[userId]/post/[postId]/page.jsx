import React from 'react'


const page = async ({params}) => {
    const {userId ,postId} = await params ; 
  return (
    <div>user/{userId}/post/{postId}</div>
  )
}

export default page ; 