import MenuIcon from "@mui/icons-material/Menu";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, ButtonGroup, Typography } from "@mui/material";
import TopBar from "../components/TopBar";
import {
  Circle,
  CircleTwoTone,
  EuroSymbol,
  FavoriteBorder,
  Info,
  Money,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

/* eslint-disable no-unused-expressions */

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

function saveFavouriteFlight(props) {
  /**execute query:
     * INSERT INTO tblFavouriteFlights (username, flightid)
       VALUES (username, props.flightId)
     */
}

function removeFavouriteFlight(props) {
  /**execute query:
   * DELETE FROM tblFavouriteFlights
   * WHERE username = username
   * AND flightId = props.flightId
   *
   */
}

function getDateTime(props) {
  /**Substring of DateTime to display only time
   *
   */
}

export default function SerchResult(props) {
  let navigate = useNavigate();
  let [destination, setDestination] = useState("Johannesburg");
  let [departure, setDeparture] = useState("Munich");
  let [currency, setCurrency] = useState("€");
  let [departureDateTime, setDepartureDateTime] = useState("2022-06-30T20:00");
  let [username, setUserName] = useState("ruan.viljoen@tum.de");

  const signInFunction = () => {
    navigate("/signin");
  };

  const signUpFunction = () => {
    navigate("/signup");
  };

  const handleInfoClick = () => {
    navigate("/info");
  };

  function createData(
    departure,
    destination,
    departureTime,
    arrivalTime,
    price
  ) {
    return { departure, destination, departureTime, arrivalTime, price };
  }

  const priceToColor = (price) => {
    let colour = "grey";
    if (price <= 600) {
      colour = "green";
    } else {
      if (price <= 900) {
        colour = "orange";
      } else {
        colour = "red";
      }
    }
    return colour;
  };

  const flightText = departure + " to " + destination;
  const rows = [
    createData(departure, destination, "20:00", "06:00", 500),
    createData(departure, destination, "23:00", "09:00", 1000),
    createData(departure, destination, "14:10", "05:10", 700),
    createData(departure, destination, "15:50", "07:00", 900),
    createData(departure, destination, "20:00", "14:00", 800),
  ];

  function BasicTable() {
    return (
      <>
        <div style={{ height: "20vh" }} />
        <Container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                {
                  <TableRow>
                    <TableCell align="center">From</TableCell>
                    <TableCell align="center">To</TableCell>
                    <TableCell align="center">Departing</TableCell>
                    <TableCell align="center">Arriving</TableCell>
                    <TableCell align="center">Price</TableCell>
                  </TableRow>
                }
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.departure}</TableCell>
                    <TableCell align="center">
                      <Grid
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        container
                        direction="row"
                      >
                        <Grid item>{row.destination}</Grid>
                        <Grid item>
                          <ButtonGroup size="small" variant="contained">
                            <Button color="error" startIcon={<FavoriteBorder />}>
                              Favorite
                            </Button>
                            <Button onClick={handleInfoClick} color="info" startIcon={<Info />}>Info</Button>
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell align="center">{row.departureTime}</TableCell>
                    <TableCell align="center">{row.arrivalTime}</TableCell>
                    <TableCell align="center">
                      <Button
                        color="info"
                        disableRipple
                        sx={{ color: priceToColor(row.price) }}
                        startIcon={<EuroSymbol />}
                      >
                        {row.price}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <header>
        <TopBar onAccountPage={false} />
        <BasicTable />
      </header>
    </div>
  );
}
