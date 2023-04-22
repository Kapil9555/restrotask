import { AppBar, Toolbar, Typography,CssBaseline } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


const Header = () => {
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          AdelSocial
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button  sx={{ color: '#fff' }}>
              Register
            </Button>
            <Button  sx={{ color: '#fff' }}>
              Login
            </Button>
            <Button  sx={{ color: '#fff' }}>
              Cart
            </Button>
         
        </Box>
      </Toolbar>
    </AppBar>
    </Box>
  );
}

export default Header;
