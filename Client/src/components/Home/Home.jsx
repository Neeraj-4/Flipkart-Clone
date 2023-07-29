import React from 'react'
import Slider from './Slider'
import Deals from'./Deals'
import { Box,styled } from '@mui/material'
const Component = styled(Box)`
  padding: 10px;
  background:whitesmoke;
`
const Home = () => {
  return (
  <>
    <Deals />
    <Component>
    <Slider />
    </Component>
  </>
  )
}

export default Home
