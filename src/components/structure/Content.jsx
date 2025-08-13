// import '../App.css'
import { Box } from '@mui/material'
import LeftMenu from '../LeftMenu';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
function Content() {



    return (
        <Box >
            <Header />

            <main >
                <LeftMenu></LeftMenu>
                <div className="tmp-page">
                    <Outlet/>
                </div>
           
            </main>
            <Footer />
        </Box>
    )
}

export default Content;