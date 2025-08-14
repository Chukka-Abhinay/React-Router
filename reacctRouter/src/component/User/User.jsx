import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid} = useParams()
  return (
    <div className='text-center  bg-amber-900 text-amber-50 text-3xl'>User : {userid}</div>
  )
}

export default User