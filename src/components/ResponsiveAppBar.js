import React from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import './ResponsiveAppBar.css'
import { useNavigate } from 'react-router-dom'
import Image from './cinebook-Logo.jpg'

const ResponsiveAppBar = () => {
    let navigate = useNavigate();
  return (
    <div>
        <React.Fragment>
            <AppBar className='app-bar-body'>
            <Toolbar>
            <Box
        component="img"
        sx={{
          height: 30,
          width: 30,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          marginBottom: 1
        }}
        alt="reload."
        src={Image}
      />
                <Typography>
                    <h3>&nbsp;Cinebook</h3>
                </Typography >

                <Tabs textColor='inherit'>
                    <Tab label='Home' sx={{fontSize: 20, marginLeft:10}} onClick={() => {navigate("/")}}/>
                    <Tab label='About Us' sx={{fontSize: 20, textColor:'inherit'}} onClick={() => {navigate("/about")}}/>
                    <Tab label='Contact us' sx={{fontSize: 20, textColor:'inherit'}} onClick={() => {navigate("/contact")}}/>
                </Tabs>

                <Button sx={{marginLeft:'auto'}} variant='contained' color='error' onClick={() => {localStorage.removeItem("user-info")
        navigate("/")
          }}>Logout</Button>

            </Toolbar>
            </AppBar>
        </React.Fragment>
    </div>
  )
}

export default ResponsiveAppBar