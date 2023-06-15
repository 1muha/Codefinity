import { useState } from 'react';
import './App.css';
import Login from "./components/login/Login"

function App() {
  const [openLogin, setOpenLogin] = useState(false)
  console.log(openLogin)
  return (
    <div className="App">
      <h1 onClick={() => setOpenLogin(openLogin ? false : true)}>Login</h1>
      <Login setOpenLogin={setOpenLogin} openLogin={openLogin} />
    </div>
  );
}

export default App;