import { Container, Grid, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import React from "react";
import TopBar from "../components/TopBar";

export default function Dashboard() {
  return (
    <>
      <TopBar onAccountPage={false} />
      <Grid container justifyContent="center" direction="column">
        <Grid item height="20vh" />
        <Container>
          <Grid item>
            <BigHeader />
          </Grid>
        </Container>
        <Grid item height="8vh" />
        <Container>
          <Grid item component="div" style={{ textAlign: "center" }}>
            <SearchBar />
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

function BigHeader() {
  return (
    <Typography variant="h3" align="center" color="primary">
      <Grid container justifyContent="center" direction="column">
        <Grid item>Search for flights from anywhere,</Grid>
        <Grid item>to anywhere, at any time!</Grid>
      </Grid>
    </Typography>
  );
}
