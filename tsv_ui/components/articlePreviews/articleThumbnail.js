import { Box, CardMedia, makeStyles, Typography } from "@material-ui/core";
import Link from "next/link";

const stylesheet = {
  image: {
    width: "100%",
    height: "100%",
  },
};

const useStyles = makeStyles(stylesheet);

export const ArticleThumbnail = (props) => {
  const styles = useStyles();

  return (
    <Box>
      <Link href="/article">
        <a>
          <CardMedia>Hi</CardMedia>
        </a>
      </Link>
    </Box>
  );
};
