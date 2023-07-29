import React from 'react'
import { Dialog, Box, TextField, styled, Typography, Button } from '@mui/material'
import { useState,useContext } from 'react'
import { Authantication } from '../../Service/api'
import { Datacontext } from '../../Context/Dataprovider'
const Container = styled(Box)`
    width: 50vw;
    height: 80vh;
    display: flex;
    overflow: hidden;
`
const Sidewrapper = styled(Box)`
background:#1976d2 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
padding: 30px 20px;
color :white;
width: 40%;
`

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    width: 60%;
    &>div,&>p,&>button{
        margin-top: 20px;
    }
`
const Field = styled(TextField)`
    word-spacing:.2ch;
    &>label{
        font-size: 14px;
        font-weight: 600;
        opacity:.8;
    }
`
const Text = styled(Typography)`
 font-size: 12px;
 color:gray;
 
`
const LoginButton = styled(Button)`
background:#fb641b;
padding:10px;
color:#fff;

`
const OtpButton= styled(Button)`
   box-shadow: .2px .2px .2px .2px gray;
   font-weight: 600;
   font-size: 14px;
   text-transform: unset;
`
const CreateAccount = styled(Typography)`
    font-size: 12px;
    color:#1976d2;
    font-weight: 600;
    text-align: center;
    margin-top:80px !important;
    cursor: pointer;
`
const Caption = styled(Typography)`
font-weight:200;
 font-size:18px;
 opacity:.8;
 margin-top:20px;
`
const swipe={
    Login:{
        view:'login',
        heading:"Login",
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    Signup:{
        view:'signup',
        heading:"Looks link you're new here!",
        subHeading:'Sign up with your mobile number to get started'
    }
}
const signupValues ={
    fullname:'',
    mobile:'',
    password:'',
}
const LoginForm = ({ open, setOpen }) => {
    const [account,setAccount]= useState(swipe.Login)
    const [signup,setSignup]=useState(signupValues);
    const {setAccountHolder} = useContext(Datacontext);
    const handleClose = () => {
        setOpen(false);
        setAccount(swipe.Login)
    }
    const swipeAccount = ()=>
    {
        setAccount(swipe.Signup);
    }
    const onValueChange=(e)=>
    {
       setSignup({...signup,[e.target.name]:e.target.value});
       
    }
    const signupData=async()=>
    {
       let response = await Authantication(signup);
       if(!response) return;
       handleClose();
       setAccountHolder(signup.fullname);
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:"unset"}}}>
            <Container>
                <Sidewrapper>
                    <Typography variant="h5"style={{fontWeight:600}}>{account.heading}</Typography>
                    <Caption variant="h6">{account.subHeading}</Caption>
                </Sidewrapper>
                { account.view ==='login'?
                <Wrapper>
                    <Field label="Enter your Email / Mobile no." variant="standard"/>
                    <Field label="Enter your Password" variant="standard" />
                    <Text>By continuing, you agree to Flipkart's <span style={{color:'#1976d2'}}>Terms of Use</span> and <span style={{color:'#1976d2'}}>Privacy Policy.</span></Text>
                    <LoginButton>Login</LoginButton>
                    <Typography style={{textAlign:"center"}}>OR</Typography>
                    <OtpButton>Request OTP</OtpButton>
                    <CreateAccount onClick={swipeAccount}>New to Flipkart? Create an account</CreateAccount>
                </Wrapper>
                :
                <Wrapper>
                    <Field label="Enter your Name" variant="standard"onChange={(e)=>onValueChange(e)} name="fullname"/>
                    <Field label="Enter your Mobile no." variant="standard"onChange={(e)=>onValueChange(e)} name="mobile"/>
                    <Field label="Create your Password " variant="standard"onChange={(e)=>onValueChange(e)} name="password"/>
                    <Text>By continuing, you agree to Flipkart's <span style={{color:'#1976d2'}}>Terms of Use</span> and <span style={{color:'#1976d2'}}>Privacy Policy.</span></Text>
                    <LoginButton onClick={()=>signupData()}>Continue</LoginButton><br></br>
                    <OtpButton >Existing User? Login</OtpButton>
                </Wrapper>
               
             }
            </Container>
        </Dialog>

    )
}

export default LoginForm
