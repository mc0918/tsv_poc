import { Avatar, Box, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    border: "3px solid green",
  },
  avatar: {},
});

export const Sidebar = () => {
  const styles = useStyles();

  return (
    <Box classes={{ root: styles.root }}>
      <Grid container justify="center">
        <Avatar classes={{ root: styles.avatar }}>S</Avatar>
        <Grid item xs={12}>
          <div>email</div>
        </Grid>
      </Grid>
    </Box>
  );
};
