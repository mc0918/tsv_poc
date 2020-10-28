import { Box, CardMedia, makeStyles, Typography } from "@material-ui/core";
import Link from "next/link";

const stylesheet = {
  verticalImage: {
    width: "100px",
    height: "200px",

  },
};

const useStyles = makeStyles(stylesheet);

export const ArticleThumbnail = (props) => {
  const styles = useStyles();
  console.log(props.isVertical)

  //going to have a vertical and horizontal thumbnail determined by props
  return (props.isVertical ? (
    <Box>
      <Link href="/article">
        <a>
        <CardMedia
          classes={{ root: styles.verticalImage }}
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
  ) : (
    <div>horizontal</div>
  )
)}
