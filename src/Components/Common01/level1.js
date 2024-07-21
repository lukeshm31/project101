import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


export function STAccordion(props){
    return (
        <>
        <div style={{margin:'20px'}}>
            
            <Accordion> 
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{background:'#EDEAE5'}}
                >
            
                {props.title}
                </AccordionSummary>
                <AccordionDetails>
                    
                {props.text}
                </AccordionDetails>
            </Accordion>
            
            
                
           
        </div>
        </>
    )
}

