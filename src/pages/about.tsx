import React from 'react'
import Logo from '../assets/next.svg';

const about = () => {
  return (
    <div>about
        {process.env.NEXT_PUBLIC_API_URL}
        <Logo/>
    </div>
  )
}

export default about