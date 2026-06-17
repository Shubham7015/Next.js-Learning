import React from 'react'
import Link from 'next/link'

const OnePage = () => {
  return (
    <div className='flex flex-col '>
        <Link href={"/one/two"}>Redirect tp two page</Link>
        <Link href={"/three"}>Redirect to third page </Link>
    </div>
  )
}

export default OnePage