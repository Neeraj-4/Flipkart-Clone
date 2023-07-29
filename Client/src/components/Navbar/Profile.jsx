import { Box,Typography,Menu,MenuItem } from "@mui/material"
import { useState } from "react"

const Profile = ({accountHolder,setAccountHolder}) => {
  const [open,setOPen]=useState(false);
  const handleClick=(event)=>
  {
    setOPen(event.currentTarget);
  }
  const handleClose=()=>
  {
    setOPen(false);
  }
  const logout =()=>{
   setAccountHolder('');
  }

  return (
    <>
    <Box onClick={handleClick}><Typography style={{marginTop:2}}>{accountHolder}</Typography></Box>
    <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>{handleClose();logout();}}>Logout</MenuItem>
      </Menu>

    </>
  )
}

export default Profile
