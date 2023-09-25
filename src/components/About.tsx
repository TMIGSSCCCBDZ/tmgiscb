"use client"
import React from 'react'
// import the style file 
import './About.css'
import { Box, Typography } from '@mui/material'
import {motion } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const About = () => {

  return (
    <div className='' >
        <motion.div 
 initial={{ x:-200,opacity: 0}}
        
 transition={{ duration: 1 }}
 viewport={{once:true}}
 whileInView={{x : 0, opacity: 1,}}
        style={{width:'100%',display:'grid',placeItems:'center',marginTop:'5rem'}}
  
        >
                    <Typography variant='h4' sx={{fontWeight:500, letterSpacing:'1rem',color:'#4d143d',margin:'0 auto'}}>About</Typography>
     </motion.div>
     <motion.div  
      initial={{ x:200,opacity: 0}}
        
      transition={{ duration: 1 }}
      viewport={{once:true}}
      whileInView={{x : 0, opacity: 1,}}
     >

     <div style={{margin:"3.5rem 2rem"}}
   
   >
   <Accordion type="single" collapsible>
<AccordionItem value="item-1">
  <AccordionTrigger style={{fontSize:'24px'}}>What we do?</AccordionTrigger>
  <AccordionContent style={{fontSize:'22px',lineHeight:'2.5rem'}}>
  We design and program web applications using modern principles to create the most user-friendly and effective websites possible.
Our web development team uses modern principles to design and program web applications. This means that we consider how people interact with websites and use this knowledge to create easy-to-use, efficient, and effective websites.

  </AccordionContent>
</AccordionItem>
</Accordion>
</div>
     
<div style={{margin:"3.5rem 2rem"}}
  
   >
   <Accordion type="single" collapsible>
<AccordionItem value="item-1">
  <AccordionTrigger style={{fontSize:'24px'}}>The tech we use?</AccordionTrigger>
  <AccordionContent style={{fontSize:'22px',lineHeight:'2.5rem'}}>
  We do this by following a rigorous process that includes:
User research: We conduct user research to understand how people interact with websites. This research helps us identify and design websites that meet our users' needs.
Usability testing: We conduct usability testing to ensure that our websites are easy to use. We observe people using our websites and get their feedback on how to improve them.
A/B testing: We use A/B testing to compare different versions of our websites to see which one performs better. This helps us to optimize our websites for performance and effectiveness.

  </AccordionContent>
</AccordionItem>
</Accordion>
</div>
     

<div style={{margin:"3.5rem 2rem"}}

   >
   <Accordion type="single" collapsible>
<AccordionItem value="item-1">
  <AccordionTrigger style={{fontSize:'24px'}}>Why you choose us?</AccordionTrigger>
  <AccordionContent style={{fontSize:'22px',lineHeight:'2.5rem'}}>
  Due to our modern approach to web development, our websites are:
Easy to use: Our websites are designed to be easy to navigate and use. We use clear and concise language
Efficient: Our websites are designed to be efficient. We use only the necessary features and information and ensure that our websites load quickly.
Effective: Our websites are designed to be effective. We use modern principles to ensure that our websites achieve their goals.

  </AccordionContent>
</AccordionItem>
</Accordion>
</div>
     


<div style={{margin:"3.5rem 2rem"}}
    
   >
   <Accordion type="single" collapsible>
<AccordionItem value="item-1">
  <AccordionTrigger style={{fontSize:'24px'}}>We are waiting you!</AccordionTrigger>
  <AccordionContent style={{fontSize:'22px',lineHeight:"2.5rem"}}>
  Call to action: We encourage you to contact us if you are looking for a web development team that can create an easy-to-use, efficient, and effective website. We would be happy to discuss your project and help you create the appropriate website for your needs. Guarantee: We are so confident in our work that we offer a 100% satisfaction guarantee. If you are not happy with your website for any reason, we will work with you to make it right. Contact us: To learn more about our web development services, contact us. We would be happy to answer any questions you have and help you get started on your project.

</AccordionContent>
</AccordionItem>
</Accordion>
</div>
     


     </motion.div>
     
  
   
    </div>
  )
}

export default About