import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PaidIcon from '@mui/icons-material/Paid';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Routes, Route, useNavigate} from 'react-router-dom';


function PrincipalButtons(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/outgoingModule/outgoingPage.tsx');
    }

    return(
        <Stack spacing={2} direction="row">
            <Button variant = "contained" startIcon={<PaidIcon/> } onClick={handleClick}> Gastos </Button>
            <Button variant = "contained" startIcon={<ShowChartIcon/>}> Investimentos </Button>
        </Stack>
    )
}

export default PrincipalButtons;