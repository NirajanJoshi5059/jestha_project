import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const nav= useNavigate();
  return (
    <div className='h-[500px] w-auto mx-auto'>
        <lottie-player src="https://lottie.host/0ceab100-873b-4295-a141-b7b1d7504dba/bIPTU3ibNe.json" 
        background="#FFFFFF" speed="1"  loop  autoplay direction="1" mode="normal"></lottie-player>
        <button onClick={()=>nav('/')} className='w-full '>Back to Home</button>
    </div>
  )
}

export default NotFound
