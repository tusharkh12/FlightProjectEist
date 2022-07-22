import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import FlightDatePicker from "./FlightDatePicker";
import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");

  let citiesFetched = false;
  const [cities, setCities] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const allCitiesOption = {
    method: "GET",
    url: "http://localhost:8080/all-cities",
    headers: { "Access-Control-Allow-Origin": "*" },
  };

  useEffect(() => {
    axios
      .request(allCitiesOption)
      .then(function (response) {
        setCities(response.data);
        console.log(cities);
        setFrom(cities[0]);
        setTo(cities[1]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    const searchOption = {
      method: "GET",
      url: "http://localhost:8080/search-flights",
      params: { departure: from.split("/")[1], destination: to.split("/")[1] },
      headers: { "Access-Control-Allow-Origin": "*" },
    };

    axios
      .request(searchOption)
      .then(function (response) {
        navigate("/search", { state: { results: response.data } });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

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
          value={from}
          onChange={(_, newvalue) => setFrom(newvalue)}
          inputValue={fromInput}
          onInputChange={(_, newvalue) => setFromInput(newvalue)}
          options={cities}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="from" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          value={to}
          onChange={(_, newvalue) => setTo(newvalue)}
          inputValue={toInput}
          onInputChange={(_, newvalue) => setToInput(newvalue)}
          options={cities}
          sx={{ width: 250 }}
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
