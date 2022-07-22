
import survey from './survey.png';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as React from "react";

const itemData = [
  {
    img: survey,
    title:  <Typography variant="h5" gutterBottom component="div">
    GO TO 
  </Typography> ,
  author: <Button variant="contained">SURVEY</Button>,
  
  },
  ];

function Surveystart() {
  return (
    <div className="CREATE  SURVEY">
    <header className="CREATE SURVEY">
    <Button variant="text"><ArrowBackIosNewIcon />
      </Button>
      <h1 style={{ textAlign: "center",color:"red" }}>!!!ATTENTION!!!</h1>
      
      
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
      HELLO @USER
      </Typography>
       <Typography variant="h4" gutterBottom component="div">
       SURVEY TIME
      </Typography>
    
  
</Grid>
</Paper>
 
      

{/* <Paper>
  
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
   
     
      
    
</Grid>
</Paper> */}

      <div style={{ width: 500, margin: 'auto' }}>
      
      <ImageList sx={{ width: 900, height: 500 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span> {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    
       
    </div>
 
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

export default Surveystart;
