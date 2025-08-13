import { Box, List, ListItemButton, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router';
import { entities } from '../entities';




const LeftMenu = () => {

    const currLocation = useLocation();
    return (
        <Box className="sidebar">
            <List>
                {
                    entities.map((item, index) => (
                        <ListItemButton component={Link} to={item.link} className='listItemButton'
                            selected={currLocation.pathname.slice(1,) === item.link}
                            key={index}
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
