import { Box, List, ListItemButton, Typography } from '@mui/material';
import { Biotech, PeopleAlt, Grass, LocationOn, ContentPaste } from '@mui/icons-material';
// import  from '@mui/icons-material/PeopleAlt';
// import  from '@mui/icons-material/Grass';
// import Location from '@mui/icons-material/LocationOn';
import { Link } from 'react-router';


export const listItems = [
    {
        name: "Исследования",
        link: "reserches",
        icon: <ContentPaste />
    },
    {
        name: "Исследователи",
        link: "reserchers",
        icon: <PeopleAlt />
    },
    {
        name: "Растения",
        link: "plants",
        icon: <Grass />
    },
    {
        name: "Локации",
        link: "locations",
        icon: <LocationOn />
    },
    {
        name: "Лаборатории",
        link: "laboratories",
        icon: <Biotech />
    },
]


const LeftMenu = () => {
    return (
        <Box className="sidebar">
            <List>
                {
                    listItems.map(item => (
                        <ListItemButton component={Link} to={item.link} className='listItemButton'>

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
