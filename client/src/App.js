import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search/index";
import Saved from "./pages/saved/index";
import Detail from "./pages/detail/index";
import NoMatch from "./pages/nomatch/index";
import Nav from "./components/Nav/index";
// // Material UI
// import NavBar from './components/NavBar'
// import BookList from './components/Booklist.js'
// import Book from './components/Book.js'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Saved} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;










// function App (Router) {
//   return (
//     <Router>
//       <div>
//           <Route exact path="/" component={Search} />
//           <Route exact path="/search" component={Search} />
//           <Route exact path="/saved" component={Saved} />



//       {/* <NavBar />
//       <BookList />
//       <Book /> */}


//       </div>
//     </Router>
//   );
// }