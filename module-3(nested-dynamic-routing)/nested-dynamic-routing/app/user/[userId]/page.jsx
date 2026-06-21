import { notFound } from 'next/navigation';
import React from 'react'


const page = async ({params}) => {
    const {userId} = await params ; 
    if(userId > 10) {
      notFound() ; 
    }
  return (
    <div>user/{userId}</div>
  )
}

export default page