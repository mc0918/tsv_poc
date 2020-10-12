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
    height: "171px",
    width: "300px",
  },
  img: {
    backgroundSize: "100% 100%",
    width: "100%",
    height: "100%",
    margin: "10px 0 0 10px",
    position: "relative",
  },
  text: {
    fontFamily: "sans-serif",
    // fontWeight: 900,
    color: "black",
    textTransform: "uppercase",
    margin: 0,
    position: "absolute",
    top: "50%",
    right: "50%",
    // fontSize: "2rem",
    transform: "translate(50%, 50%)",
  },
});
export const ArticlePreview = (props) => {
  const classes = useStyles({ image: props.image });

  return (
    <Box className={classes.root}>
      <a href="/notes">
        <CardMedia image={props.image} className={classes.img}>
          <h5 className={classes.text}>{props.title}</h5>
        </CardMedia>
      </a>
    </Box>
  );
};
