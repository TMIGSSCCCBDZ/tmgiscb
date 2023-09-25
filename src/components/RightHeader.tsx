"use client"
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import CameraRoundedIcon from '@mui/icons-material/CameraRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import {  Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import {motion} from 'framer-motion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconButton,Box } from '@mui/material';
 import Image from 'next/image'
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('Home');

  const { setTheme } = useTheme()

  return (
    <Box sx={{background:'inherit',display:'flex',flexDirection:'row',alignItems:'center'}}  >
 
  <IconButton onClick={ () =>  window.location.reload()} sx={{color:'inherit',alignItems:'center',justifyContent:'center' }}><Image width={25} height={25} src={'/tmgiscb.png'} /> 
</IconButton>

  <Link href={'#about'}>

    <IconButton sx={{color:'inherit', margin:'0 0.8rem'}}><Groups2RoundedIcon /> </IconButton>

  </Link>
  <Link href={'#gallery'}>
  <IconButton sx={{color:'inherit', margin:'0 0.8rem'}}><WorkspacesIcon /> </IconButton>

    </Link>
    <Link href={'#gallery__first'}>
        <IconButton sx={{color:'inherit', margin:'0 0.8rem'}}><CameraRoundedIcon /> </IconButton>

    </Link>

          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      
    
    
    </Box>
  );
}
