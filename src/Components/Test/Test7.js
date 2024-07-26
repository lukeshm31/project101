import React from "react";
import { Box, TextField } from "@mui/material";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


const CapsuleContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 20, // Adjust the radius for desired capsule shape
  border: '1px solid #ccc', // Adjust border style as needed
  padding: '5px 10px',
  minWidth:'310px',
  maxWidth: '500px', // Adjust width as needed
});

const CustomTextField = styled(TextField)({
  flex: 1,
  marginRight: 8,
});

const CapsuleButton = styled(Button)({
  borderRadius: 20, // Match the container's radius
  width:"auto"
});

export const CapsuleComponent = ({ placeholder, buttonText, ...otherProps }) => {
  return (
    <CapsuleContainer>
      <CustomTextField placeholder={placeholder} {...otherProps} />
      <CapsuleButton variant="contained">
        {buttonText}
      </CapsuleButton>
    </CapsuleContainer>
  );
};



export function Test7() {
    return(
    
        <Box sx={{ width:'100%', display:'flex', justifyContent:'center', justifyItems:'center'}}>
             
            <Box gap={2}> 
            <br/>
            <CapsuleComponent buttonText="Submit" />
            <br/>


            <CapsuleContainer >
                <Box Width={300} sx={{display:'flex', alignItems:'center'}} gap={1}>
                    <Box sx={{width:'7.5%'}}> 
                        <FormControl>
                        <FormControlLabel control={<Radio />} />    
                        </FormControl> 
                    </Box> 
                    <Box sx={{width:'70%'}}> Task description 1.............................. </Box>
                    <Box sx={{width:'7.5%'}}> <Box borderRadius={'4px'} bgcolor={"#c8c8c854"} height={30} >  <ModeEditOutlineOutlinedIcon/> </Box> </Box> 
                    
                    <Box sx={{width:'7.5%'}}> <Box borderRadius={'4px'} bgcolor={"#c8c8c854"} height={30} >  <DeleteForeverOutlinedIcon/> </Box> </Box> 
                    
                    
                </Box> 
               
            <p>  </p>
            
            
            
            </CapsuleContainer>
         
           
            

            </Box>
        
        </Box>
        
    )
}