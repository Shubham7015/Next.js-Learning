import React from 'react'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-zinc-800'>
        <img src={"/not-found.svg"} height={400} width={400} />
        <h1 className='text-5xl font-semibold text-indigo-200'>404 User Not Found</h1>
        <Link href={"/"} className='px-4 py-2 border rounded-md bg-indigo-400 border-none m-6'>Go to Home</Link>
    </div>
  )
}

export default NotFoundPage