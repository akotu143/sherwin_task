import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { useState } from 'react';
import {Box,Typography,FormControl,InputLabel,Select,MenuItem,TextField,Button, Stack} from '@mui/material';

const Createusageattribute = () => {
  
    const [selectedItem, setSelectedItem] = useState('');
  
    const handleChange = (event) => {
      setSelectedItem(event.target.value);
    
    };
    const dropdownItems = [
      { value: '10', label: 'india' },
      { value: '10', label: 'white' },
      { value: '10', label: 'red' },
    ];
  return (
    <div>
      <Box sx={{ p: 3, m: 1, pl: 4 }}>

<Typography variant="h3" component="div" sx={{ flexgrow: 1 }} >
    Createusageattribute
</Typography>

</Box>
      <Stack spacing={3}>
        <Stack direction='row' spacing={3}>
          <Box>
            
            <h2>Attribute Names</h2>
            <FormControl variant="outlined" fullWidth>
      <InputLabel>Choose an option</InputLabel>
      <Select value={selectedItem} onChange={handleChange} label="Choose an option">
        {dropdownItems.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
          </Box>
          <Box>
            <h2>Attribute Value</h2>
            <TextField variant='outlined' />
            </Box>
          <Box sx={{p:9}}>
            
            <Button variant='contained' size='large'fullWidth='10'>ADD</Button>
            </Box>
        </Stack>

      </Stack>
       <Link to='/' className='Link'>Back to SherwinTask</Link>
      
    
    </div>
  );
}

export default Createusageattribute
