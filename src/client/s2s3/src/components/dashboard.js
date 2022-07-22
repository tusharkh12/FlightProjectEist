import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import ListSubheader from "@mui/material/ListSubheader";
import survey from "./survey.png";
import movies from "./movies.jpg";
import order from "./order.jpg";
import safety from "./saftey.jpg";
import * as React from "react";
import { useNavigate} from "react-router-dom";


function Dashboard() {
  let navigateSafe = useNavigate();
  let navigateMovie = useNavigate();
  let navigateOrder = useNavigate();
  let navigateSurvey = useNavigate();

  const handleSearchMovie = () => navigateMovie("/movie");
  const handleSearchSafe = () => navigateSafe("/safetyinstruction");
  const handleSearchOrder = () => navigateOrder("/order");
  const handleSearchSurvey = () => navigateSurvey("/survey");


  const itemData = [
    {
      img: movies,
      title: (
        <Button variant="filled" onClick={handleSearchMovie}>
          Movies
        </Button>
      ),
    },
    {
      img: safety,
      title: (
        <Button variant="filled" onClick={handleSearchSafe}>
          Safety
        </Button>
      ),
    },
    {
      img: survey,
      title: (
        <Button variant="filled" onClick={handleSearchSurvey}>
          Survey
        </Button>
      ),
    },
    {
      img: order,
      title: (
        <Button variant="filled" onClick={handleSearchOrder}>
          Food
        </Button>
      ),
    },
  ];

  return (
    <div className="App">
      <header className="App">
        <Paper elevation={0} sx={{ padding: "1em", borderRadius: 1 }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <ImageList sx={{ width: 900, height: 800 }}>
              <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">
                  {" "}
                  <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    color={"blue"}
                  >
                    DASHBOARD
                  </Typography>
                </ListSubheader>
              </ImageListItem>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                  />
                  <ImageListItemBar title={item.title} subtitle={item.author} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Paper>
      </header>
    </div>
  );
}

export default Dashboard;
