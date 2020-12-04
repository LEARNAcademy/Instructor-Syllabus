import React from "react"
// 1. Import the components that are needed for React Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import "./App.css"

// 2. Import all the pages to App.js
import About from "./pages/About"
import Home from "./pages/Home"
import Tomato from "./pages/Tomato"

const App = () => {
  return (
    <Router>
      <div>
        <h1>Here is App.js Handling Our Routing</h1>
        {/* 4. Using a semantic tag to denote the navigation links */}
        <nav>
          <ul>
          <li>
            {/* 5. Creating the anchor tags using the Link component from React Router */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/tomato">Tomato</Link>
          </li>
          </ul>
        </nav>

        {/* 6. Calling the components we imported from "pages" to render in response to the Link */}
        <Route path="/" exact component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/tomato" component={ Tomato } />
      </div>
    </Router>
  );
}

export default App;
