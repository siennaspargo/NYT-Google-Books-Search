import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


// Material UI
import NavBar from './components/NavBar'
import BookList from './components/Booklist.js'
import './App.css';


// Material UI
class App extends Component {
  render() {
    return (
    <div>
      <NavBar />
      <BookList />
    </div>
    );
  };
}

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
