import { Box, List, ListItemButton, Typography } from '@mui/material';
import { Biotech, PeopleAlt, Grass, LocationOn, ContentPaste } from '@mui/icons-material';
// import  from '@mui/icons-material/PeopleAlt';
// import  from '@mui/icons-material/Grass';
// import Location from '@mui/icons-material/LocationOn';
import { Link, useLocation } from 'react-router';
import Reserch from './pages/Research';
import { entities } from '../entities';




const LeftMenu = () => {

    const currLocation = useLocation();
    return (
        <Box className="sidebar">
            <List>
                {
                    entities.map(item => (
                        <ListItemButton component={Link} to={item.link} className='listItemButton'
                        selected={currLocation.pathname.slice(1,) === item.link}
                        >
                            {item.icon}
                            <Typography>
                                {item.name}
                            </Typography>
                        </ListItemButton>
                    ))

                }
            </List>
        </Box>
    );
}

export default LeftMenu;
