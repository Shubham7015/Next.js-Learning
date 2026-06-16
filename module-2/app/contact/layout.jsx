import React from 'react'

const layout = ({children}) => {
  return (
    
    <div>
        <h2>Header will come here only for /contact page
        </h2>
        {children}
        
        <h2>Footer will come here for only /contact page</h2>
    </div>
  )
}

export default layout