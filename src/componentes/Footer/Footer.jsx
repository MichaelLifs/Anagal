import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import logo from '../../assets/Logo2.jpg';
import Contact from '../../assets/Contact Us.jpg';
import Support from '../../assets/Support.jpg';
import Updated from '../../assets/Updated.jpg';
import More from '../../assets/More.jpg';
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <footer>
            <Box
                px={{ xs: 2, sm: 2 }}
                py={{ xs: 2, sm: 2 }}
                bgcolor="#242446"
                color="#c6c4d8 "
            >
                <Container maxWidth="lg">
                    <Grid container justifyContent="center" spacing={6}>
                        <Grid container justifyContent="center" item xs={12} sm={8} md={6} lg={4} component={Link} to="/404" aria-label='404'>
                            <img src={Contact} postition="center" alt="Contact.js" height="100px" />
                        </Grid>
                        <Grid container justifyContent="center" item xs={12} sm={8} md={6} lg={4} component={Link} to="/404" aria-label='404'>
                            <img src={Support} postition="center" alt="Support.js" height="100px" />
                        </Grid>
                        <Grid container justifyContent="center" item xs={12} sm={8} md={6} lg={4} component={Link} to="/404" aria-label='404'>
                            <img src={Updated} postition="center" alt="Updated.js" height="100px" />
                        </Grid>


                    </Grid>

                    <Box justifyContent="center" textAlign="center" >
                        <img src={logo} alt="AnagalShop.js" height="155px" />
                    </Box>
                    <Box justifyContent="center" textAlign="center" >
                        All rights reserved  Michael Lifshitz  ©  {new Date().getFullYear()}
                    </Box>

                </Container>
            </Box>
        </footer >
    );
}