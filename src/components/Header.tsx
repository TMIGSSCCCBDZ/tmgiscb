"use client"
import React from 'react'
// import the style file 
import './Header.css'
// import from the components folder
import RightHeader from './RightHeader'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Box, IconButton } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { motion } from "framer-motion"
import Link from 'next/link'
const Header = () => {
  return (
    <div className='header'>
        <motion.div 
        initial={{ marginLeft:'-20rem',opacity: 0, }}
        animate={{ marginLeft:'1rem',opacity: 1, }}
        transition={{ duration: 1 }}
        className='right__header'>
            <RightHeader />
        </motion.div>
      <Box sx={{flexGrow:'1'}} />
        <motion.div
        initial={{ marginRight:'-20rem',opacity: 0}}
        animate={{ marginRight:'1rem',opacity: 1 }}
        transition={{ duration: 1 }}
        className='left__header'>
          <Link href={"#contact"}>
             <IconButton sx={{color:"inherit"}}>
                <EmailRoundedIcon />
            </IconButton>
          </Link>
           
        </motion.div>
        
        </div>
  )
}

export default Header