import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";

import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />

        </Wrapper>
   
      </div>
    </Router>
  );
}

export default App;
