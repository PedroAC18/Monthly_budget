import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PaidIcon from '@mui/icons-material/Paid';
import ShowChartIcon from '@mui/icons-material/ShowChart';


function PrincipalButtons(){

    return(
        <Stack spacing={2} direction="row">
            <Button variant = "contained" startIcon={<PaidIcon/>}> Gastos </Button>
            <Button variant = "contained" startIcon={<ShowChartIcon/>}> Investimentos </Button>
        </Stack>
    )
}

export default PrincipalButtons;