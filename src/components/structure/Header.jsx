// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SpaIcon from '@mui/icons-material/Spa';
import { Link } from 'react-router';

function Header() {
    return (
        <header>
            <AppBar position="static" class="AppBar">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        LinkComponent={Link}
                        to='/'
                    >
                        <SpaIcon />

                    </IconButton>
        
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        EcoData
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;