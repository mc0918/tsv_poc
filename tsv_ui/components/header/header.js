import { Grid, Button, Toolbar, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import AppBar from "@material-ui/core/AppBar";
import "./header.module.css";

export const Header = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Grid container justify="center">
          <Grid item xs={11}>
            <Grid container justify="center" align="center" spacing={2}>
              <Grid item xs={12}>
                <Typography color="inherit" variant="h3">
                  The Silicate Valley
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  On the hemorrhaging edge of tech news
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={1}>
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
