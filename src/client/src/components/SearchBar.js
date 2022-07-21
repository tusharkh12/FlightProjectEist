import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Button,
  Divider,
  Grid,
  Paper,
  Snackbar,
  TextField,
} from "@mui/material";
import { useState } from "react";
import FlightDatePicker from "./FlightDatePicker";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  let navigate = useNavigate();
  const handleSearch = () => navigate("/search");

  return (
    <Paper
      color="default"
      variant="outlined"
      sx={{ padding: "2em", borderRadius: 2, display: "inline-block" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnGap={3}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Munich", "Berlin", "Paris", "New Delhi", "Chengdu"]}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="from" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={["Munich", "Berlin", "Paris", "New Dehli", "Chengdu"]}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="to" />}
        />
        <FlightDatePicker />
        <Divider orientation="vertical" flexItem />
        <Button
          variant="contained"
          size="large"
          disableElevation
          startIcon={<SearchIcon />}
          onClick={handleSearch}
        >
          {" "}
          Search
        </Button>
      </Grid>
    </Paper>
  );
}
