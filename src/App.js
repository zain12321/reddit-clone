import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import {
	BrowserRouter as Router,
	Routes, Route,
  } from 'react-router-dom';
  import Profile from './pages/Profile';
import Home from './pages/Home';
function App() {
  const [darkTheme, setDarkTheme] = useState();

  return (
    <div className={darkTheme ? 'dark' : ' '}>
    <div className='dark:bg-black min-h-screen min-w-fit'>

<Router>
<div className=' '>
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>  
        </div>
<Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route  path='/profile' element={< Profile />}></Route>

</Routes>
</Router>

    </div>
      
 </div>
  
  );
}

export default App;
