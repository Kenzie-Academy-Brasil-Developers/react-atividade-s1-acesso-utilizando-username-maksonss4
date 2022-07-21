import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import GetUserComponent from './components/GetUserComponent';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [user, setUser] = useState('')

  return (
    <div className='App'>
      <div className='App-header'>
        {
          isLoggedIn ?                    
          <WelcomePage setUser={setUser} user={user} setIsLoggedIn={setIsLoggedIn}> <p>Insira um nome válido</p> </WelcomePage>      
          :
          <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn}> <h3>Insira seu nome</h3> </GetUserComponent>
        }
      </div>
    </div>
  );
}

export default App;
