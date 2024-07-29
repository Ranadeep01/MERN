import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import Signup from './components/Signup'

function App() {

  const [auth, setAuth] = useState('signup')
  console.log(auth)

  return (
    <div className="App">
      {
       (auth==='login') ?
       (
         <Login setAuth = {setAuth} />
       ):
       (
        <Signup setAuth = {setAuth} />
       )

      }
    </div>
  );
}

export default App;
