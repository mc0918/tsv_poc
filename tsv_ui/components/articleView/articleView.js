import { Grid } from "@material-ui/core";

export const Article = (title, author, date, image, body) => {
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <title>{title}</title>
    </Grid>
    <Grid item xs={12}>
      <p>{author}</p>
      <p>{date}</p>
    </Grid>
    <Grid item xs={12}>
      <p>{image}</p>
    </Grid>
    <Grid item xs={12}>
      <p>{body}</p>
    </Grid>
  </Grid>;
};

 