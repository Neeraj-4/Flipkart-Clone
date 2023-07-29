import React from 'react'
import { Box, Button, styled, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoginForm from '../login/LoginForm';
import { useState,useContext } from 'react';
import { Datacontext } from '../../Context/Dataprovider';
import Profile from './Profile';
const ContentWapper = styled(Box)`
display: flex;
margin-left: 20px;
text-transform: capitalize;

`
const LoginButton = styled(Button)`
   
   padding: 3px 35px;
    background: #fff;
    color:#1976d2;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: .5mm;
`
const LinkWrapper = styled(Box)`
display: flex;
gap: 30px;
margin:3px 0 0 35px;
`
const Wrapper = styled(Box)`
display: flex;
gap:2px;
`
const CustomLinks = () => {
    const [open,setOpen]=useState(false);
    const {accountHolder,setAccountHolder} = useContext(Datacontext);
    const openDialog = ()=>{
        setOpen(true);
    }
    return (
        <ContentWapper>
            {
                accountHolder?<Profile accountHolder={accountHolder} setAccountHolder={setAccountHolder} />:
            <LoginButton variant="contained"onClick={openDialog}>Login</LoginButton>
                
            }
            <LinkWrapper>
            <Typography>Become a Seller</Typography>
            <Wrapper>
                <Typography>More</Typography>
                <ExpandMoreIcon style={{fontSize:16,marginTop:2}} />
            </Wrapper>
            <Wrapper>
                <ShoppingCartIcon style={{fontSize:18}} />
                <Typography>Cart</Typography>
            </Wrapper>
            </LinkWrapper>
            <LoginForm open={open} setOpen={setOpen}/>

        </ContentWapper>




    )
}

export default CustomLinks
