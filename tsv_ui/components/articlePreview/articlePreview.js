import {
  Item,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundSize: "100% 100%",
    width: "100%",
    height: "200px",
    margin: "10px 0 0 10px",
    position: "relative",
    // float: "left",
  },
  text: {
    fontFamily: "sans-serif",
    fontWeight: 900,
    color: "white",
    textTransform: "uppercase",
    margin: 0,
    position: "absolute",
    top: "50%",
    fontSize: "2rem",
    transform: "translate(50%, 50%)",
  },
});
export const ArticlePreview = (props) => {
  const classes = useStyles({ image: props.image });

  return (
    <Box>
      <CardMedia image={props.image} className={classes.root}>
        <h2 className={classes.text}>{props.title}</h2>
      </CardMedia>
    </Box>
  );
};
