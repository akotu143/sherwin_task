import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Box, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField } from '@mui/material';
import { FormLabel } from '@mui/material';
import Typography from '@mui/material/Typography';

const Creatingusage = () => {
  return (
    <div>
        <Box sx={{ display: 'flex', '& > :not(style)': { m: 10, width: 800, height: 300, }, }}>
          <Paper variant="outlined" square>
            <Box sx={{ p: 2, m: 1, pl: 8 }}>
            <Box>
            <Typography variant="h4" component="div" sx={{ flexgrow: 1 }} >
            Creatingusage
            </Typography>
            </Box>

        </Box>
        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
          <Box sx={{p1:10}}>
            <Typography variant='block' display='block' component='div' sx={{flexgrow:1}} gutterBottom>
              Region
            </Typography>
          </Box>
          <Box sx={{p1:0.5}}></Box>
          <Box sx={{p1:0.10}}>
            <FormControl sx={{width:'30ch'}}>
              <InputLabel id="demo-simple-select-helper-label">Select a Region</InputLabel>
              <Select>
                <MenuItem value={10}>India</MenuItem>
                <MenuItem value={10}>china</MenuItem>
                <MenuItem value={10}>russia</MenuItem>
              </Select>
            </FormControl>
          </Box>
          
            <Typography variant='block' display='block' component='div' sx={{flexgrow:1}} gutterBottom>
              Color Source
            </Typography>
          
           <Box sx={{p1:0.25}}></Box> 
          <Box sx={{m:1,width:'100%',p1:8.5}}>
            <FormControl>
              <TextField>
              </TextField>
            </FormControl>
          </Box>
          </Stack>


          </Paper>

          </Box>  
        

       
       
       <Link to='/' className='Link'>Back to SherwinTask</Link>
        
    </div>
  )
}

export default Creatingusage
