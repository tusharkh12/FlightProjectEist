import * as React from "react";
import Typography from "@mui/material/Typography";
import review from "./review.jpg";
import coupon from "./coupon.jpg";
import opinions from "./opinions.jpg";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { createTheme, styled } from "@mui/material/styles";
import "./survey.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));
const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

function BasicRating() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}

function App() {
  function createData(number, question, BasicRating) {
    return { number, question, BasicRating };
  }

  // let [rating, setRating] = useState(5)

  const [value, setValue] = React.useState(5);
  const [value2, setValue2] = React.useState(5);
  const [value3, setValue3] = React.useState(5);

  const rows = [
    createData(
      "1.",
      "Please rate the Entertainment System and the catering. ",
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    ),
    createData(
      "2.",
      "Did you find the flight worth it. ",
      <Rating
        name="simple-controlled"
        value={value2}
        onChange={(event, newValue) => {
          setValue2(newValue);
        }}
      />
    ),
    createData(
      "3.",
      "How comfortable were you during the flight. ",
      <Rating
        name="simple-controlled"
        value={value3}
        onChange={(event, newValue) => {
          setValue3(newValue);
        }}
      />
    ),
  ];

  function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
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
                <TableCell
                  component="th"
                  scope="row"
                  padding="normal"
                  align="right"
                  style={{ width: "12%" }}
                >
                  {row.number}
                </TableCell>

                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "10%" }}
                ></TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "5%" }}
                ></TableCell>

                <TableCell
                  align="left"
                  padding="normal"
                  style={{ width: "0%" }}
                >
                  {row.question}
                </TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "10%" }}
                ></TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "0%" }}
                ></TableCell>

                <TableCell align="right">
                  {" "}
                  <BasicRating></BasicRating>
                </TableCell>
                <TableCell
                  align="left"
                  padding="normal"
                  style={{ width: "12%" }}
                ></TableCell>
                <TableCell
                  align="right"
                  padding="normal"
                  style={{ width: "0%" }}
                ></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  const [comment, setComment] = React.useState("");
  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="Survey">
      <header className="Survey">
        <Button variant="text">
          <ArrowBackIosNewIcon />
        </Button>

        <Paper
          elevation={0}
          sx={{ padding: "1em", borderRadius: 1, display: "inline-block" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            columnGap={0}
          >
            <img src={review} alt="review" height={350} width={850} />

            <img
              src={coupon}
              alt="coupon"
              height={300}
              width={500}
              style={{
                justifyContent: "right",
                alignItems: "right",
              }}
            />
          </Grid>
        </Paper>

        <Paper
          elevation={0}
          sx={{ padding: "3em", borderRadius: 1, display: "outline-block" }}
        >
          <Grid>
            <div className="row">
              <BasicTable></BasicTable>
            </div>
          </Grid>
        </Paper>

        <Paper elevation={0}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            columnGap={12}
          >
            <div></div>
            <div></div>

            <img src={opinions}></img>
          </Grid>
        </Paper>

        <Paper elevation={0}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            columnGap={10}
          >
            <div></div>
            <div></div>
            <div></div>
            <Typography variant="h6" gutterBottom component="div">
              Please share your valuable suggestions!!!
            </Typography>
          </Grid>
        </Paper>

        <Paper elevation={0}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            columnGap={2}
          >
            <Box
              sx={{
                display: "center",
                "& > :not(style)": {
                  m: 1,
                  width: 1000,
                  height: 150,
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                fullWidth
                id="Outlined"
                label="Please share your comments"
                variant="outlined"
                color="success"
                value={comment}
                onChange={handleChange}
              />
            </Box>

            <Paper
              elevation={0}
              sx={{ padding: "1em", borderRadius: 1, display: "outline-block" }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  const options = {
                    method: "GET",
                    url: "http://localhost:8080/submit-survey",
                    params: {
                      rating1: value,
                      rating2: value2,
                      rating3: value3,
                      comment: comment,
                    },
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                    },
                  };

                  axios
                    .request(options)
                    .then(function (response) {
                      console.log(response.data);
                    })
                    .catch(function (error) {
                      console.error(error);
                    });
                }}
              >
                <NavLink className="nav-link" style={{color: "white"}}to="/coupon">
                  submit
                </NavLink>
              </Button>
            </Paper>
          </Grid>
        </Paper>
      </header>
    </div>
  );
}

export default App;
