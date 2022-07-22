
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import burger from './burger.jpg';
import fries from './fries.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as React from "react";


const itemData = [
  {
    img: burger,
    title: 'Burger',
  },
  {
    img: fries,
    title: 'Fries',
  },
];

function Coupon() {
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
          sx={{ padding: "0em", borderRadius: 2, display: "inline-block" }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            columnGap={1}>

<h1 style={{ textAlign: "center",color:"red" }}>!!! COUPONS !!!</h1>

          </Grid>
        </Paper>
        <Paper
 elevation={0}
    sx={{ padding: "1em", borderRadius: 1}}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
    <Typography variant="h3" gutterBottom component="div">
      WELCOME BACK USER
      </Typography>
       <Typography variant="h4" gutterBottom component="div">
       THANKS FOR COMPLETING THE SURVEY!!
      </Typography>
    
  
</Grid>
</Paper>



<Paper
 elevation={0}
    sx={{ padding: "1em", borderRadius: 1}}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  columnGap={10}

  >
   <ImageList sx={{ width: 1000, height: 1000 }} cols={2} rowHeight={500}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
 
    
  
</Grid>
</Paper>


      </header>
    </div>
  );
}

export default Coupon;
