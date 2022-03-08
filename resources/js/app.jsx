import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Home from './Page/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);