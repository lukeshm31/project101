import React, {useId} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div> 
            <Box id='st001'
                sx={{
                    justifyContent:'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 500,
                    height: 300,
                    },
                }}
                >
                
                <Paper elevation={2}> 
                        Heading
                        <Paper elevation={3} spacing={2} sx={{margin:2, height:100}}> 
                            <Grid container spacing={2} paddingLeft={2}>
                                <Grid xs={6} padding={1}> abc  </Grid>
                                 <Grid xs={6} padding={1} sx={{textAlign:'end'}}> <Box> abc </Box>  </Grid>
                                <Grid xs={6} padding={1} > abc  </Grid>
                                <Grid xs={6} padding={1} sx={{textAlign:'end'}}> 
                                    <Box>
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select sx={{width:100, height:20}}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value="currency"
                                        label="Currency"
                                        // onChange={handleChange}
                                        >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>
                            
                        </Paper>
                        <Paper elevation={3} sx={{margin:2, height:100}}> 
                           abc
                        </Paper>
                </Paper>
            </Box>
        </div>
    );
}

export default InputBox;