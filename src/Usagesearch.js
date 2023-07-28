import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import {Box,Button,Grid,Stack,TextField,Typography} from '@mui/material';



const Usagesearch = () => {
    const buttonStyle = {
        backgroundColor: '#4caf50', 
        color: 'white',
        fontSize: '19px',
        borderRadius: '4px', 
        padding: '10px 10px',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)',
        
      };

  return (
    <div>
        <Box sx={{ p: 3, m: 1, pl: 4 }}>

<Typography variant="h3" component="div" sx={{ flexgrow: 1 }} >
    UsageSearch
</Typography>

</Box>
        <Stack>
            <Stack direction ='row' >
            <Box component='form' autoComplete='off'>
            <h2>Usagesearch</h2>
            <TextField id='outlined-error' label="search" sx={{width:500,maxWidth:'100%' }} />
            <Button style={buttonStyle} variant='contained'>Search</Button>
            
            </Box>
            <Box sx={{p:7}}>
                <h2>or</h2>
            </Box>
            <Box sx={{p:9}}>
                <Button style={buttonStyle} variant='contained'>Create Usage</Button>
            </Box>
                
            
            </Stack>
        </Stack>
        <Link to='/' className='Link'>Back to SherwinTask</Link>
    </div>
         
  );
}

export default Usagesearch;
