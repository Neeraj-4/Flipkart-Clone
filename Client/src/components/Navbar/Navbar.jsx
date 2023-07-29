import { AppBar, Toolbar,styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Search from './Search'
import CustomLinks from './CustomLinks'

const Stylenavbar = styled(AppBar)`
    height: 55px;
`
const Component = styled(Box)`
    margin-left:170px;
    line-height:0;
`

const Subheading = styled(Typography)`
 font-size: 10px;
 font-style: italic;
 display: flex;
 font-weight: 600;

`
const Navbar = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
   <Stylenavbar>
    <Toolbar style={{minHeight:55}}>
       <Component>
        <img src={logoURL} alt="logoURL"style={{width:75}} />
        <Box>
            <Subheading>Explore&nbsp; 
                <Box component="span"style={{color:"gold"}}>Plus</Box>
                <img src={subURL} alt="sublogo"style={{width:10,height:10}} />
                </Subheading>
            </Box>
       </Component>
       <Search/>
    <Box>
        <CustomLinks/>
    </Box>
    </Toolbar>
   </Stylenavbar>
  )
}

export default Navbar
