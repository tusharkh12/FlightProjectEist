
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as React from "react";




const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title:   <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={["Water", "Tea", "Coffee","Iced Tea", "Cola" ,"Fanta", "Spezi","Beer","Wine","Whiskey","Beer"]}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Drinks" />}
  /> ,
  author: <Button variant="contained">Order</Button>,
  
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title:   <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={["Burger","Veg-Meal", "Non-veg Meal"]}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Food" />}
  /> ,
  author: <Button variant="contained">Order</Button>,
  
  },
  ];


function Order() {
  return (
    <div className="CREATE  SURVEY">
    <header className="CREATE SURVEY">
   
      <h2></h2>
      <Button variant="text"><ArrowBackIosNewIcon />
      </Button>

      <Typography variant="h3" gutterBottom component="div" style={{ textAlign: "center"}}>
      !!!MENU!!!
      </Typography>
      
      {/* <Paper
 elevation={0}
    sx={{ padding: "1em", borderRadius: 1}}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
 
</Grid>
</Paper> */}
 
      

{/* <Paper>
  
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
   
     
      
    
</Grid>
</Paper> */}
<Paper
 elevation={0}
    sx={{ padding: "3em", borderRadius: 1}}>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >

<div style={{ width: 800, margin: 'auto' }}>
<ImageList sx={{ width: 900, height: 600 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <Paper
 elevation={0}
    sx={{ padding: "1em", borderRadius: 1}}>
          <ImageListItemBar
          
            title={item.title}
            subtitle={<span> {item.author}</span>}
            position="below"
          />
          </Paper>
        </ImageListItem>
      ))}
    </ImageList>
    </div>
 
</Grid>
</Paper>

 
{/* <Paper
 elevation={0}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  columnGap={2}
  >
     
    
  
</Grid>
</Paper> */}


  
        




</header>
      </div>


   
  );
}

export default Order;
