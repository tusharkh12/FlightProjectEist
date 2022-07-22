
import Weather from "../assets/a.png";
import Map from "../assets/map.png";
import background from "../assets/aa.jpg";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useState } from "react";
import TopBar from "../components/TopBar";
import styles from "../background.module.css";
import { Button, ButtonGroup } from "@mui/material";
import {FavoriteBorder, Info,} from "@mui/icons-material";



 
 
 


  
export default function Details() {
  let [name, setName] = useState("BrandeburgTor");
  let [rating, setRating] = useState("4/5");

 

  function createData(name, rating) {
    return { name, rating };
  }

  const rows = [
    createData(name, rating),
    createData(name, rating),
    createData(name, rating),
    createData(name, rating),
    createData(name, rating),
  ];
 /* const Image = () => {
    return (
      <article
        className={styles.article}
        style={{ backgroundImage: `url(${imagey})` }}
      >
        <h1 className={styles.header}>BERLIN</h1>
      </article>
    );
  };*/
  const Picture = () => {
    return (
      <article className={styles.article}>
        <picture className={styles.picture}>
          <source media="(min-width: 1000px)" srcSet={background} />
      
<img src={background} alt="background" height={650} width={1400} />
        </picture>
        <h1 className={styles.header}>BERLIN</h1>
      </article>
    );
  };
 

  function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {
              <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            }
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                </TableCell>

                 <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "0%" }}
                >
                  {row.name}
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
               
                <Grid item>
                          <ButtonGroup size="small" variant="contained">
                            <Button color="error" startIcon={<FavoriteBorder/>}>
                              Favorite
                            </Button>
                           
                          </ButtonGroup>
                        </Grid>
                        </TableCell>

                        <TableCell>
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                </TableCell>

               
                <TableCell>
                
                </TableCell>
                <TableCell
                 
                ></TableCell>
                <TableCell align="right">{row.rating}</TableCell>

              
                
                <TableCell
                  
                ></TableCell>

                
                <TableCell>
                 
                </TableCell>
                <TableCell
                  
                ></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div className="Destination City">
      
      <TopBar onAccountPage={false} />
      <header className="Destination City">
        <h1></h1>
      {/* <Image></Image> */}
      <Picture></Picture>
        
        <Paper
          color="default"
          variant="outlined"
          sx={{ padding: "2em", borderRadius: 2, display: "inline-block" }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            columnGap={1}
          >
            {/* <p>
              <img src={imagey} height={500} width={1300} />
            </p> */}

            {/* <h2>WHY GO TO BERLIN!!!</h2> */}
            {/* <Typography variant="h4" gutterBottom component="div">
            WHY GO TO BERLIN!!!
      </Typography> */}
           
           
              {" "}
              <Typography variant="h6" gutterBottom component="div">
              Tourists,Talents,Technology and Tolerance shape the rhythms of the
              city which is dynamic and welcoming ,tolerant and trendy,diverse
              and creative.A US magazine called Berlin “the place to be” and
              encapsulated the thing that fascinates both Berliners and
              visitors. No other city has such a moving history, no other city
              has changed this fast – and reinvents itself constantly.But
              exactly what is it that actually makes Berlin so attractive? It is
              the diversity, the contrasts and the sheer inexhaustible potential
              of this capital city to consistently fire the enthusiasm of its
              visitors from all over the world. People are excited by the
              mixture of history and Zeitgeist, the broad spectrum of art,
              culture, music, entertainment and shopping facilities.On average,
              500.000 guests visit Berlin each day. Half of them come to the
              German capital for a second or third time. And many who come as
              tourists think about moving here. Berlin has a magnetism over
              young, creative, well-trained, and productive people.visitBerlin
              launched the app „Going Local Berlin,“ especially for those Berlin
              visitors who come to the city yet again. For the first time in an
              app, all twelve Berlin districts and their unique highlights are
              the focus. The free app offers visitors tips for orientating
              themselves in the city’s many diverse neighbourhoods, together
              with tips for discovering new aspects of Berlin. Initially, 60
              neighbourhoods with more than 600 tips are presented. They were
              personally selected by visitBerlin staff and in cooperation with
              the districts themselves. In addition, the app offers a tour of
              each district that’s also available as a video and gives insight
              into the atmosphere and the highlights of that part of the city.
              The tips are organized into categories such as “Must See”, “Hidden
              Places” and “Eating and Drinking”.
      </Typography>
             
          
          </Grid>
        </Paper>

        <Paper elevation={0}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            columnGap={5}
          >
            <div></div>
            <div></div>
            <div></div>
            <Typography variant="h1" gutterBottom component="div">
              MAP
            </Typography>

            <div></div>
            <div></div>
            <img src={Map} height={550} width={850} />


         
            <div></div>
          </Grid>
        </Paper>


       
        <Paper
          elevation={1}
          sx={{ padding: "2em", borderRadius: 1, display: "inline-block" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            columnGap={8}
          >
         

            <img
              src={Weather}
              height={450}
              width={750}              
            />
            <div></div>
             <Typography variant="h1" gutterBottom component="div">
              WEATHER
            </Typography>

          </Grid>
        </Paper>
        <h1></h1>

        <Paper elevation={0}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columnGap={13}
          >
        
        <Typography variant="h4" gutterBottom component="div" align="center">
        POI
      </Typography>
      <div></div>
      
      </Grid></Paper>

       

        <Paper
          elevation={0}
          sx={{ padding: "2em", borderRadius: 2, display: "inline-block" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            columnGap={30}
          >
            <div></div>
        
      
          <div className="row">
            <BasicTable></BasicTable>
          </div>
          </Grid>
        </Paper>
      </header>
    </div>
  );
}
