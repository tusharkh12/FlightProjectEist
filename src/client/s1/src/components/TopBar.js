import DashboardIcon from "@mui/icons-material/Dashboard";
import { AirplaneTicketTwoTone } from "@mui/icons-material";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar(props) {
  let { onAccountPage } = props;
  let navigate = useNavigate();
  const handleLogin = () => navigate("/signin");
  const handleSignUp = () => navigate("/signup");
  const handleBackHome = () => navigate("/");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            columnGap={1}
            alignItems="center"
          >
            <Button
              onClick={handleBackHome}
              size="large"
              startIcon={<AirplaneTicketTwoTone />}
            >
              Trip Dashboard
            </Button>
          </Grid>
          {!onAccountPage && (
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              columnGap={2}
              alignItems="center"
            >
              <Button
                variant="outlined"
                color="primary"
                size="medium"
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button
                color="primary"
                disableElevation
                variant="contained"
                size="medium"
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
