import React, {useState} from 'react';
import './App.scss'
import Login from './login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './home/Nav';
import Home from './home/Home';

function App() {
  const [mainView, setMainView] = useState(true);
  var view;
  if (mainView) {
    view = <Nav />
  } else {
    view = <Login />
  }


  return (
    <div className="App">
      {view}
    </div>
  );
}

export default App;
