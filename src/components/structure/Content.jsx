// import '../App.css'
import { Box } from '@mui/material'
import LeftMenu from '../LeftMenu';
import { Outlet } from 'react-router';

function Content({ children }) {



    return (
        <main className="Body" style={{ display: "flex" }}>
            <LeftMenu></LeftMenu>
            <Box>
                <Outlet />
            </Box>
        </main>
    )
}

export default Content;