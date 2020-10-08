import {
  Grid,
  Button,
  Toolbar,
  Typography,
  Tab,
  Tabs,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";

export const Header = () => {
  return (
    <AppBar position="static" color="transparent">
      <div id="header-container">
        <Toolbar>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Grid container justify="center" align="center" spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography color="inherit" variant="h3">
                    The Silicate Valley
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    Hemorrhaging edge tech news delivered straight to you
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* <div style={{zIndex: 2}}>
          <Grid container xs={12}>
              <Grid container justify="center" align="center" spacing={1}>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    REGISTER
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    LOGIN
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            </div> */}

          <div id="login-container" style={{ position: "absolute", zIndex: 1, paddingLeft: "80%" }}>
            <Grid container xs={12}>
              <Grid container justify="center" align="center" spacing={1}>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    REGISTER
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    LOGIN
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Toolbar>

        <div style={{ textAlign: "center" }}>
          <Tabs
            value={0}
            onChange={null}
            aria-label="simple tabs example"
            centered={true}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </div>
      </div>
    </AppBar>
  );
};
