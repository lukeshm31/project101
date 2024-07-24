import { Height } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function BgChanger() {
    const [color, setColor] = useState('grey')
    const [num, setNum] = useState(0)
    const [colorArray] = useState(["white", "grey", "blue", "green"])

    const {userId} = useParams()
    console.log(userId)
   
    function NextColor() { setColor(colorArray[num]) }

    return(
        <>
        <Box className="container" id="abc" sx={{backgroundColor:color, minHeight:700}}> 
            <Box> {userId} </Box>
            <Button variant="contained" onClick={()=>{
                setNum(num+1)
                setColor(colorArray[num])
                
            }}> Button </Button>
            
        </Box>
        </>
    )

}