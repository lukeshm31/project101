import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { STAccordion } from '../../Common01/level1';


export function Test01(){
    const title = "title2";
    return (
        <>
        
        <div style={{margin:'200px'}}>
            <STAccordion title={title} text={title} />
        </div>
        </>
    )
}

