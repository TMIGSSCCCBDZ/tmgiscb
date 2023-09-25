"use client"
import React from 'react'
// import the style file 
import './HeaderBody.css'
import { Typewriter } from 'react-simple-typewriter'
import { Avatar, Typography } from '@mui/material'
import {motion} from 'framer-motion'
const HeaderBody = () => {


  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <motion.div className='header__body'
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
        <div className='absolute border [#333333] opacity-5 round-full h-[200px] w-[200px] mt-50  rounded-full' />

        <div className='absolute border [#333333] opacity-10 round-full h-[300px] w-[300px] mt-50  rounded-full' />
        <div className='absolute border [#333333]   opacity-20 round-full h-[500px] w-[500px] mt-50  rounded-full' />

<Avatar src='/tmgiscb.png' sx={{position:'absolute',marginBottom:'14rem',width:70,height:70}}></Avatar>
<Typography variant='subtitle2' sx={{color:'rgb(138, 138, 138)',opacity:'10%',position:'absolute',marginBottom:'5rem',letterSpacing:'1.5rem'}}>TMGISCB Team</Typography>
        <h1 style={{ fontWeight: 'normal',fontSize:"1.5rem" }}>
        We are {' '}
        <span style={{ color: '#4d143d', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["TMGISCB Team",'Frontend developers', 'Backend developers', 'Fullstack developers', 'Graphic designers',"UI & UX designers"]}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            
          />
        </span>
      </h1>
    </motion.div>
  )
}

export default HeaderBody