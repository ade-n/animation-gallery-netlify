import React from "react";
import GalleryList from "../Gallery/GalleryList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

import NavBar from "../navBar/NavBar";
import About from "../About/About";
import NoMatchPage from "../Error/NoMatchPage";

import Card1Page from "../ItemsPages/Card1Page";
import Card2Page from "../ItemsPages/Card2Page";
import Card3Page from "../ItemsPages/Card3Page";
import Card4Page from "../ItemsPages/Card4Page";
import Card5Page from "../ItemsPages/Card5Page";
import Card6Page from "../ItemsPages/Card6Page";
import Card7Page from "../ItemsPages/Card7Page";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="w-full">
          <NavBar />
        </div>
        <hr />

        <Switch>
          <Route exact path="/" component={GalleryList}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/card1" component={Card1Page}></Route>
          <Route path="/card2" component={Card2Page}></Route>
          <Route path="/card3" component={Card3Page}></Route>
          <Route path="/card4" component={Card4Page}></Route>
          <Route path="/card5" component={Card5Page}></Route>
          <Route path="/card6" component={Card6Page}></Route>
          <Route path="/card7" component={Card7Page}></Route>
          <Route path="*" component={NoMatchPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
