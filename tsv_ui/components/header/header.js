import {
  Grid,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import "./header.module.css";

export const Header = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Grid container justify="space-between" direction="row">
          <Grid item xs={2}>
            {/* empty item for spacing... getting title in the middle */}
            
          </Grid>
          <Grid item>
            <Typography color="inherit" variant="h3">
              Title... will it center?
            </Typography>
          </Grid>
          <Grid item>
            <Grid container justify="column" spacing={2}>
              <Grid item xs={6} s={12}>
                <Button>REGISTER</Button>
              </Grid>
              <Grid item xs={6} s={12}>
                <Button>LOG IN</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
