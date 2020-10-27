import {
  Avatar,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { ArticleThumbnail } from "../articlePreviews/articleThumbnail";

const useStyles = makeStyles({
  root: {
    // border: "3px solid green",
    marginTop: "75px",
  },
  avatar: {
    textAlign: "center",
    marginTop: "-19px",
  },
  subHeadings: {
    textAlign: "left",
    marginLeft: "5%",    
    "& h2": {
        borderBottom: '5px solid orange'
    }
  },
});

export const Sidebar = () => {
  const styles = useStyles();
  const centeredStyling = { margin: "3% 5% 0 5%", textAlign: "center" };

  return (
    <Box classes={{ root: styles.root }}>
      <Grid container justify="center">
        <Avatar classes={{ root: styles.avatar }}>S</Avatar>
        <Grid container justify="center">
          <Grid item xs={12}>
            <div style={centeredStyling}>
              <h2>Sign up for nothing from The Silicate Valley</h2>
            </div>
            <form>
              <div style={centeredStyling}>
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
                <p style={{ margin: centeredStyling.margin }}>
                  little flavor text for ya, woop woop. We don't own an email so
                  we can't spam you if we tried
                </p>
              </div>
            </form>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.subHeadings}>
              <h2>Must Read</h2>
              <Grid item>
                <ArticleThumbnail />
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.subHeadings}>
              <h2>Don't Miss</h2>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
