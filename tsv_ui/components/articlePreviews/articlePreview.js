import {
  Box,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Link from 'next/link';

const stylesheet = {
  root: {
    // height: "171px",
    // width: "300px",
    height: '200px',
    width: '90%',
    overflow: "hidden",
    // margin: "10px 0 10px 0",
    margin: "10px 0 0 0",
    marginRight: '-25px',
    position: "relative",
  },
  image: {
    backgroundSize: "100% 100%",
    width: "100%",
    height: "100%",
    position: "relative",
    "&:hover": {
      backgroundSize: '120% 120%'
    // "& element": {color: 'yellow'} for the genre text that changes color when hovering the article
    },
    transition: '0.2s'
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
  
}

const useStyles = makeStyles(stylesheet);

//props needed: title, image, href, author, date, category, comments(?)
export const ArticlePreview = (props) => {
  const styles = useStyles();

  return (
    <Box classes={{root: styles.root}}>
      <Link href="/article" passHref>
      <a>
        <CardMedia
          classes={{ root: styles.image }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${props.image})`,
          }}
        >
          {/* <h5 style={stylesheet.text}>{props.title}</h5> */}
          <h5 className={styles.text}>{props.title}</h5>
        </CardMedia>
      </a>
      </Link>
    </Box>
  );
};
