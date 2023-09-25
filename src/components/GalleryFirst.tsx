"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { Typography } from '@mui/material'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import db from '@/firebase/firebase'
import Link from 'next/link';
function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}



const GalleryFirst = () => {
  const [projects, setProjects] = React.useState([])
  const [gallery, setGallery] = React.useState([])
  
  React.useEffect(() => {
  
    db.collection('projects').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setProjects(snapshot.docs.map(doc => ({id:doc.id, projects:doc.data()})))
    })
   
  }, [])
  React.useEffect(() => {
  
    db.collection('gallery').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setGallery(snapshot.docs.map(doc => ({id:doc.id, gallery:doc.data()})))
    })
   
  }, [])
  console.log(gallery)
  return (
    <div>
        <motion.div 
 initial={{ x:-200,opacity: 0}}
        
 transition={{ duration: 1 }}
 viewport={{once:true}}
 whileInView={{x : 0, opacity: 1,}}
        style={{width:'100%',display:'grid',placeItems:'center',marginTop:'7rem'}}
  
        >
                    <Typography variant='h4' sx={{fontWeight:500, letterSpacing:'1rem',color:'#4d143d',margin:'0 auto', textAlign:'center'}}>Projects & Gallery </Typography>
     </motion.div>

     <motion.div 
      initial={{ opacity: 0, scale:0.5}}
        
      transition={{ duration: 1 }}
      viewport={{once:true}}
      whileInView={{ opacity: 1,scale:1}}
     style={{marginTop:'10rem'}}>
     <Carousel infiniteLoop={true} emulateTouch={true} showStatus={false} showIndicators={false} stopOnHover={true} showThumbs={false}   autoPlay={true} centerMode={true} dynamicHeight={true} interval={2000} >
           {projects.map(project => (
  <Link href={project.projects.url}>
             <div>
            
                                    <img src={project.projects.image} style={{width:150}} />

             
                </div>
 </Link>
           ))}
               
              
            </Carousel>
     </motion.div>
     <motion.div
       initial={{ opacity: 0, scale:0.5}}
        
      transition={{ duration: 1 }}
      viewport={{once:true}}
      whileInView={{ opacity: 1,scale:1}}
     
     style={{display:'grid',placeItems:'center',width:'100%',marginTop:'15rem'}}>
     <ImageList
      sx={{
        width: '80%',
        maxWidth:700,
        height: 450,
     
        boxShadow:'none',
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={250}
      gap={10}
    >
      {gallery.map((item) => {
        const cols = item?.gallery?.featured ? 1 : 1;
        const rows = item?.gellery?.featured ? 1 : 1;
console.log(item.gallery.image)
        return (
          <ImageListItem key={item.gallery?.image} cols={cols} rows={rows}>
            <img
              {...srcset(250, 200, rows, cols)}
              src={item.gallery?.image}
              alt={item.gallery?.title}
             
              loading="lazy"
            />
        
          </ImageListItem>
        );
      } )}
    </ImageList>
     </motion.div>
    </div>
  )
}

export default GalleryFirst