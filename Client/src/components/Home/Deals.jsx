import { Box,styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'
const Component = styled(Box)`
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px;
margin: 50px 50px 10px;

`
const Container = styled(Box)`
padding: 5px 10px;
text-align: center;

`
const Text =styled(Typography)`
font-size: 14px;
`

const Deals = () => {
    return (
        <Component>
            {
                navData.map(Data => {
                    return(
                    <Container>
                        <img src={Data.url} alt="nav" style={{width:70}}/>
                        <Text>{Data.text}</Text>
                    </Container>
                    )
                })
            }

        </Component>
    )
}

export default Deals
