
import safety from './safety.jpeg';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import * as React from "react";


export default function Safetyinstruction() {
  return (
    <div className="App">
      <header className="APP">
      
      
       
          <Grid
           container
           direction="row"
           justifyContent="flex-start"
           alignItems="center">

<Button variant="text"><ArrowBackIosNewIcon />
      </Button>

          </Grid>
        
      <Paper
         elevation={0}
          sx={{ padding: "2em", borderRadius: 2, display: "inline-block" }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            columnGap={1}>

<h1 style={{ textAlign: "center",color:"red" }}>!!!SAFETY INSTRUCTIONS!!!</h1>

          </Grid>
        </Paper>


        <Paper
        
       
          sx={{ padding: "2em", borderRadius: 2, display: "inline-block" }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            columnGap={1}>

            <img src={safety} height={800} width={1300} />
            <h2 style={{ textAlign: "center",color:"red" }}>YOUR SAFETY IS OUR NUMBER 1 PRIORITY</h2>
           


          </Grid>
        </Paper>

        
      </header>
    </div>
  );
}
