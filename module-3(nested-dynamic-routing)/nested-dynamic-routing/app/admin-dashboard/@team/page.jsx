import React from 'react'
import Link from 'next/link'

const TeamPage = () => {
  return (
    <div className='bg-green-500 h-[50%]'>
      <Link href={"/admin-dashboard/team-docs"}>
      Go to Team Docs
      </Link>
    </div>
  )
}

export default TeamPage