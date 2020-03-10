import React, {useState} from 'react';
import './App.scss'
import Login from './login/Login';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mainView, setMainView] = useState(true);
  var view;
  if (mainView) {
    view = <Home />
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
