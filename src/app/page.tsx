"use client"
import React from 'react'
// import from the components folder 
import Header from '@/components/Header'
import HeaderBody from '@/components/HeaderBody'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import GalleryFirst from '@/components/GalleryFirst'
import Contact from '@/components/Contact'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

interface Props {
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
      window?: () => Window;
      children: React.ReactElement;
    }
    
    function ScrollTop(props: Props) {
      const { children, window } = props;
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
      });
    
      const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
          (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');
    
        if (anchor) {
          anchor.scrollIntoView({
            block: 'center',
          });
        }
        document.documentElement.scrollTo({top:0, behavior:'smooth'})
        document.body.scrollTo({top:0, behavior:'smooth'})

      };
    
      return (
        <Fade in={trigger}>
          <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
          >
            {children}
          </Box>
        </Fade>
      );
    }
const page = (props: Props) => {
  return (
    <div className='snap-y snap-mandatory    ' style={{overflowX:'hidden'}} >
    
    <section >
       <Header />
    </section>
         
     
    
      <HeaderBody />
  
      <section id="about" >
<About />
      </section>
      <section id="gallery" >
<Gallery />
      </section>
      <section id="gallery__first" >
<GalleryFirst />
      </section>
      <section id="contact" >
<Contact />
      </section>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}

export default page