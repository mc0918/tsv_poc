import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Clock from "../components/clock";
import Counter from "../components/counter";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { tick } from "../lib/slices/clockSlice";
import useInterval from "../lib/useInterval";
import ArticlePage from "./articlePage";

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
          <ArticlePage />
        </div>
        <div id="footer-container">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
