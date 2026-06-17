import React from 'react'

const DocsPage = async({params}) => {
     const{slug} = await params ; 
  return (
    <div>DocsPage docs/{JSON.stringify(slug)}</div>
  )
}

export default DocsPage ; 