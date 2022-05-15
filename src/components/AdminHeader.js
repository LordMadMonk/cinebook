import React from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import './AdminHeader.css'
import { useNavigate } from 'react-router-dom'
import Image from './cinebook-Logo.jpg'

const AdminHeader = () => {
    let navigate = useNavigate();
  return (
    <div>
        <React.Fragment>
            <AppBar className='admin-app-bar-body'>
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
                </Typography>
                <Button sx={{marginLeft:'auto'}} variant='contained' color='error' className='logout-button' onClick={() => {localStorage.removeItem("user-info")
        navigate("/adminlogin")}}>Logout</Button>
            </Toolbar>
            </AppBar>
        </React.Fragment>
    </div>
  )
}

export default AdminHeader