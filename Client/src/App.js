import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { Box } from '@mui/material'
import Dataprovider from './Context/Dataprovider'
const App = () => {
  return (
   <Dataprovider>
   <Navbar />
   <Box style={{marginTop:55}}>
    <Home/>
   </Box>
   </Dataprovider>
  )
}

export default App
