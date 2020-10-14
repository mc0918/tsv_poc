import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import useInterval from "../lib/useInterval";
import ArticleGrid from "../components/articleGrid/articleGrid";
import { Sidebar } from "../components/sidebar/sidebar";

const IndexPage = () => {
  // const dispatch = useDispatch()
  // // Tick the time every second
  // useInterval(() => {
  //   dispatch(tick({ light: true, lastUpdate: Date.now() }))
  // }, 1000)

  return (
    <React.Fragment>
      <div id="container">
        <Header />
        <div id="page-container">
          <Grid container>
            <Grid item xs={8}>
              <ArticleGrid />
            </Grid>
            <Grid item xs={4}>
              <Sidebar />
            </Grid>
          </Grid>
        </div>
        <div id="footer-container">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
