import {
  Avatar,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    border: "3px solid green",
    marginTop: '75px',
  },
  avatar: {
    textAlign: "center",
    marginTop: '-19px',

  },
});

export const Sidebar = () => {
  const styles = useStyles();

  return (
    <Box classes={{ root: styles.root }}>
      <Grid container justify="center">
        <Avatar classes={{ root: styles.avatar }}>S</Avatar>
        <Grid container justify="center">
          <Grid item xs={12}>
            <div style={{textAlign: 'center', margin: '0 13% 5% 13%'}}>
              <h2>Sign up for nothing from The Silicate Valley</h2>
            </div>
            <form>
              <div style={{ margin: "3% 5% 0 5%", textAlign: "center" }}>
                <TextField
                  id="email"
                  label="your email"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <Button variant="contained" color="secondary" fullWidth>
                  sign up
                </Button>
                <p style={{ margin: "3% 5% 3% 5%" }}>
                  little flavor text for ya, woop woop. We don't own an email so
                  we can't spam you if we tried
                </p>
              </div>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
