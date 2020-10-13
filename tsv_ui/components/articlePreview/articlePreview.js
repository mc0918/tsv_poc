import {
  Box,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "171px",
    width: "300px",
    overflow: "hidden",
    margin: "10px 0 10px 0",
    position: "relative",
  },
  img: {
    backgroundSize: "100% 100%",
    width: "100%",
    height: "100%",
    position: "relative",
    "&:hover": {
      backgroundSize: '120% 120%'
    // "& element": {color: 'yellow'} for the genre text that changes color when hovering the article
    },
  },
  text: {
    fontFamily: "sans-serif",
    color: "white",
    textTransform: "uppercase",
    margin: 0,
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translate(50%, 50%)",
  },
});

//props needed: title, image, href, author, date, category, comments(?)
export const ArticlePreview = (props) => {
  const styles = useStyles({ image: props.image });

  return (
    <Box className={styles.root}>
      <a href="/notes">
        <CardMedia
          classes={{ root: styles.img }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${props.image})`,
          }}
        >
          <h5 className={styles.text}>{props.title}</h5>
        </CardMedia>
      </a>
    </Box>
  );
};
