import { Box, Typography } from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Password } from "@mui/icons-material";


export function Test02() {
    const [length, setLength] = useState(6)
    const [numberAllowed, setNumberAllowed] = useState(true)
    const [charAllowed, setCharAllowed] = useState(true)
    const [password, setPassword] = useState("")

    const PasswordGenerator = useCallback( () => {
        let pass = ""
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghyjklmnopqrst"
        if (numberAllowed) { string += "0123456789" }
        if (charAllowed) { string += "!@#$%^&*_-=+?/" }

        for (let i=1; i<=length; i++) {
            let index = Math.floor(Math.random()*string.length)+1
            pass += string.charAt(index)
            
        }

        setPassword(pass)

    }, [length, numberAllowed, charAllowed, setPassword ])

    useEffect(()=> {PasswordGenerator()}, [length, numberAllowed, charAllowed, PasswordGenerator] )

    const CopytoClipboard = useCallback(()=>{window.navigator.clipboard.writeText(password)}, [password])



    
    

    return (
        <>

        <Box alignItems="center" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding:'20px'}}  >
            <Box sx={{padding:'20px', background: '#bfff7936 !important', maxWidth:'600px'}}> 

           
                <Typography variant="h2"> Password Generator </Typography>
                
                <Grid container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'30px'}}>
                    <Grid sx={{margin:"10px"}} > 
                        <TextField id="outlined-basic" label="Password" variant="outlined" style={{width:'500px'}} color="success" value={password}/>
                    </Grid>

                    <Grid>
                        <Button variant="outlined" onClick={CopytoClipboard}> Copy </Button>
                    </Grid> 

                </Grid>

                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{ width: 300 }}>
                        <Slider defaultValue={10} aria-label="Default" valueLabelDisplay="auto" max={20} color=""   onChange={(e)=> {setLength(e.target.value)}} /> Length : {length}
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Number" onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Charcter"  onChange={()=>{setCharAllowed((prev)=>!prev)}} />
                    </Box>
                </Grid>
            </Box>
            
            
            

        </Box>
        </>
    )

}