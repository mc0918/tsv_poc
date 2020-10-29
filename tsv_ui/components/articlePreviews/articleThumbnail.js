import { Box, CardMedia, makeStyles, Typography } from "@material-ui/core";
import Link from "next/link";

const stylesheet = {
  verticalImage: {
    width: "100%",
    height: "150px",
  },
  horizontalImage:{
    width: '100%',
    height: "150px",
  },
  text: {
    fontFamily: "sans-serif",
    color: "black",
    textTransform: "uppercase",
    margin: 0,
    width: "100%",
  },

};

const useStyles = makeStyles(stylesheet);

export const ArticleThumbnail = (props) => {
  const styles = useStyles();

  //going to have a vertical and horizontal thumbnail determined by props
  return props.isVertical ? (
    <Box>
      <Link href="/article">
        <a>
          <CardMedia
            classes={{ root: styles.verticalImage }}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${props.image})`,
            }}
          ></CardMedia>
          <h5 className={styles.text}>{props.title}</h5>
        </a>
      </Link>
    </Box>
  ) : (
    <Box>
      <Link href="/article">
        <a>
          <CardMedia
            classes={{ root: styles.horizontalImage }}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${props.image})`,
            }}
          ></CardMedia>
          <h5 className={styles.text}>{props.title}</h5>
        </a>
      </Link>
    </Box>
  );
};
