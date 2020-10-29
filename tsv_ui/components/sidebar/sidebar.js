import {
  Avatar,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { ArticleThumbnail } from "../articlePreviews/articleThumbnail";
import { titles } from "../articleGrid/articleGrid";

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
      borderBottom: "5px solid orange",
    },
  },
});

export const Sidebar = () => {
  const styles = useStyles();
  const centeredStyling = { margin: "3% 5% 0 5%", textAlign: "center" };

  const mustReadArticles = titles.slice(0, 4).map((article) => {
    return (
      // <Grid item key={article} xs={6} sm={6} style={{ marginRight: "-25px" }}>
      <Grid item key={article} xs={6}>
        <ArticleThumbnail
          title={article}
          image="/stoat.jpg"
          isVertical={true}
        />
      </Grid>
    );
  });
  const dontMissArticles = titles.slice(5, 11).map((article) => {
    return (
      <Grid item key={article} xs={12} style={{ marginRight: "-25px" }}>
        <ArticleThumbnail
          title={article}
          image="/stoat.jpg"
          isVertical={false}
        />
      </Grid>
    );
  });

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
              <Grid item xs={12} className="hello">
                <Grid container spacing={2}>
                {mustReadArticles}
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.subHeadings}>
              <h2>Don't Miss</h2>
              <Grid item xs={6}>
                {dontMissArticles}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
