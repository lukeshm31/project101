import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./01_Common"
import { Box } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";




function Layout() {
    return (
        
        
        <Box container sx={{ width:'100%'}}>
             
             <Header/>

            <Box container sx={{ width:'100%'}} >
                <Outlet  />
            </Box>
            
            
          
        </Box>
       
    )
}


export default Layout;