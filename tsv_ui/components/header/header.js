import {
  Grid,
  Button,
  Toolbar,
  Typography,
  Tab,
  Tabs,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const [tabValue, setTabValue] = useState(0);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleClick = href => (event) => {
    event.preventDefault();
    router.push(href)
  }

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

          <div
            id="login-container"
            style={{ position: "absolute", zIndex: 1, paddingLeft: "80%" }}
          >
            <Grid container>
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
          <Tabs //TODO: value 0 means only item 1 will ever be selected
            value={tabValue}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered={true}
          >
            {/* <Link href="/notes"> */}
            <Tab
              label="Latest"
              onClick={handleClick('/notes')}
            />
            {/* </Link> */}
            <Tab label="Top" onClick={handleClick('/notes')}/>
            <Tab label="Categories" />
          </Tabs>
        </div>
      </div>
    </AppBar>
  );
};
