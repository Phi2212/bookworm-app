import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Home from './Page/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signin from './Page/Signin/Signin';
import About from './Page/About/About';

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/About" element={<About />}>
          </Route>
          <Route path="/Signin" element={<Signin />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}





















ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);