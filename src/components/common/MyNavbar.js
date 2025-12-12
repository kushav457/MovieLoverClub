import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material';
import{theme,darkTheme} from '@/styles/mui/theme'
import { useState } from 'react';


export default function MyNavbar() {
  const [currentTheme,setcurrentTheme]= useState("dark");
  return (<>
  
  <ThemeProvider theme={currentTheme==="dark"?darkTheme:theme}>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit"  onClick={() => 
    setcurrentTheme(currentTheme === "dark" ? "light" : "dark")
  }>BLog</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
   


   
  
 </> );
}
