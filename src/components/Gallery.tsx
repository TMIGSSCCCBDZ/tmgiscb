"use client"
import React from 'react'
import { Box, Typography } from '@mui/material'
import {motion } from 'framer-motion'
import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
const Gallery = () => {
  return (
    <div  style={{display:'grid',placeItems:'center',width:'100%'}}>
 <motion.div 
 initial={{ x:-200,opacity: 0}}
        
 transition={{ duration: 1 }}
 viewport={{once:true}}
 whileInView={{x : 0, opacity: 1,}}
        style={{width:'100%',display:'grid',placeItems:'center',marginTop:'5rem'}}
  
        >
                    <Typography variant='h4' sx={{fontWeight:500, letterSpacing:'1rem',color:'#4d143d',margin:'0 auto'}}>Experience</Typography>
     </motion.div>
     <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once:true}}
        transition={{ duration: 1 }}

     >
     <Box         sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'column', lg:'row',xl:'row'},marginTop:'4.5rem',width:'100%',overflowX:'scroll',alignItems:"center"}}
>
     <Card className={cn("w-[400px]")} style={{margin:'1rem 0.7rem',padding:'0 3rem', }} >
      <CardHeader>
        <CardTitle>Frontend developers</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
       
      
        
            <div
             
            
              key={'1'}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {'experience'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {'2+ years of experience in front-end development'}
                </p>
              </div>
            </div>
            <div
             
            
             key={'1'}
             className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
           >
             <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
             <div className="space-y-1">
               <p className="text-sm font-medium leading-none">
                 {'skills'}
               </p>
               <p className="text-sm text-muted-foreground">
                 {'Strong understanding of HTML, CSS, and JavaScript'}
               </p>
             </div>
           </div>
           <div
             
            
             key={'1'}
             className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
           >
             <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
             <div className="space-y-1">
               <p className="text-sm font-medium leading-none">
                 {'frameworks'}
               </p>
               <p className="text-sm text-muted-foreground">
                 {'Experience with front-end frameworks and libraries'}
               </p>
             </div>
           </div>
         
      </CardContent>
   
    </Card>
    <Card className={cn("w-[400px]")} style={{margin:'1rem 0.7rem',padding:'0 3rem'}} >
      <CardHeader>
        <CardTitle>Backend developers</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
       
      
        
            <div
             
            
              key={'1'}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {'experience'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {'1+ years of experience in backend-end development '}
                </p>
              </div>
            </div>
            <div
             
            
             key={'1'}
             className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
           >
             <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
             <div className="space-y-1">
               <p className="text-sm font-medium leading-none">
                 {'skills'}
               </p>
               <p className="text-sm text-muted-foreground">
                 {'Strong understanding of real-time-databases , firestores, authentication and storages '}
               </p>
             </div>
           </div>
           <div
             
            
             key={'1'}
             className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
           >
             <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
             <div className="space-y-1">
               <p className="text-sm font-medium leading-none">
                 {'pace'}
               </p>
               <p className="text-sm text-muted-foreground">
                 {'Experience with latest tech and AI'}
               </p>
             </div>
           </div>
          
      </CardContent>
    
    </Card>
    <Card className={cn("w-[400px]")} style={{margin:'1rem 0.7rem',padding:'0 3rem'}} >
      <CardHeader>
        <CardTitle>Graphic designers</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
       
      
        
            <div
             
            
              key={'1'}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {'experience'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {'3+ years of experience in Graphic design '}
                </p>
              </div>
            </div>
            <div
             
            
             key={'1'}
             className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
           >
             <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
             <div className="space-y-1">
               <p className="text-sm font-medium leading-none">
                 {'skills'}
               </p>
               <p className="text-sm text-muted-foreground">
                 {'logo design, UI & UX design , banner design , illustration'}
               </p>
             </div>
           </div>
           <div
             
            
             key={'1'}
             className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
           >
             <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
             <div className="space-y-1">
               <p className="text-sm font-medium leading-none">
                 {'pace'}
               </p>
               <p className="text-sm text-muted-foreground">
                 {'catching up with the new trends and modern design with AI'}
               </p>
             </div>
           </div>
       
      </CardContent>
     
    </Card>
    </Box>
     </motion.div>
</div>
  )
}

export default Gallery