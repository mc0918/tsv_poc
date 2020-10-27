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
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <div style={{width: '100%'}}>
                <p style={{marginLeft: '25px'}}>home&gt;categories&gt;all</p>
                <h1 style={{marginLeft: '25px'}}>Title</h1>
              </div>
              <ArticleGrid />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
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
