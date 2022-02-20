import React from 'react'
import Tesla from '../Img/Tesla.jpeg'
import {Typography,Box} from '@material-ui/core'

function Home() {
  return (
      <Box>
      <Typography style={{textAlign:'center',fontFamily:"fantasy",fontSize:"25px"}}>Welcomer To my Application </Typography>
      <Box>
    <img src={Tesla} style={{width:'30%',marginLeft:"35%",marginRight:"35%",marginTop:"2.5%"}}/>
    </Box>
    </Box>
  )
}

export default Home