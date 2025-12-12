
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
 import { useState } from "react";

import Navbar from "@/components/common/MyNavbar";
import { Box, Button, ThemeProvider } from "@mui/material";
import {theme} from "@/styles/mui/theme"
import { darkTheme } from "@/styles/mui/theme";


export default function Home() {
  const [visible,setVisible]= useState(false);
  
  return (<>
    <ThemeProvider theme={darkTheme}>
 

        <Navbar/>
     
       <Button onClick={()=> setVisible(!visible)}>Toggle</Button>

      <Box height="200"/>
      {
        visible ?(<Box height="200px" sx={{background:"pink" ,width:"500px" }}/>):(<></>)
      }  
  </ThemeProvider>
 </> );
}
