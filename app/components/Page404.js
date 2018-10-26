import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='home'>
      <h1>
        Are you lost.... this is page 404
      </h1>
      <Link className='button' to='/'>
        Go Home
      </Link>
    </div>
  )
}

export default Page404
