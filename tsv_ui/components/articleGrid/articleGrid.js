import { Grid } from "@material-ui/core";
import { ArticlePreview } from "../articlePreview/articlePreview";

const titles = [
  "bad things happening where you don't live",
  "clam invasion",
  "top 10 safest cars to be hit by",
  "biggest endowments, male and otherwise",
  "investors buy ten million dollars",
  "misleading article causes you to hate your parents",
  "what's going on down there?",
  "have you seen it?",
  "ninth article in list often disappointing",
  "video games cause systemic violence say woke parents",
  "women get political",
  "man just laying out objective truths, no underlying agenda",
  "New York gives me fourteen dollars",
  "Big O offends un-optimized Italians",
  "Dick Cheney shot someone, remember that?",
  "Area man designs his own website",
  "Study reveals money can buy happiness, influence study results",
  "Gamers DDOS ACLU over CS:GO",
  "You'll never guess what we wrote about now",
  "Orange you glad there's no more headlines?",
];

let articleList = titles.map((article) => {
  return (
    <Grid item key={article} xs={12} sm={6} style={{ marginRight: "-25px" }}>
      <ArticlePreview title={article} image="/stoat.jpg" />
    </Grid>
  );
});

//TODO make the navigation bar thing and title change based on category (hot, recent, etc)
// should it be its own component?
const ArticleGrid = (props) => {
  return (
    <Grid item xs={12}>
      
      <Grid container justify="center" spacing={0}>
        {articleList}
      </Grid>
    </Grid>
  );
};

export default ArticleGrid;
