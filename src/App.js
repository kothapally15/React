import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import ClickFunction from './Components/ClickFunction';
import ClickClass from './Components/ClickClass';
import EventBind from './Components/EventBind';
import ParentComponents from './Components/ParentComponents';
import UserGreeting from './Components/UserGreeting';
import Hooks from './Components/hooks';
import MapFilter from './Components/MapFilter';
import Calci from './Components/Calci';
import Fetch from './Components/Fetch';
import Axios from './Components/Axios';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import NavBar from './Navbar'
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import sharanimg from './SharanLogo.png'
import SearchFilter from './Components/SearchFilter';

export const UserContext=React.createContext();

function App() {
  return (
    <div className="App">
      {/* <Greet names="Mangoes" username="yellow" taste="sweet" >
          <p>This is a children props</p>
          <button>Click</button>
      </Greet>
      <Welcome names="we use"/> 
      <Hello/>
      <Message/>
      <ClickFunction/>
      <ClickClass/>
      <div> <h1>This is Event Binding</h1></div>
      <EventBind/> */}
      {/* <ParentComponents/> */}
      {/*<ParentComponents/>*/}
      {/* <UserGreeting/> */}
       {/* <Hooks/> */}
      {/* <MapFilter/>  */}
    {/* <Calci/> */}
       {/* <Fetch/> */}
       {/* <UserContext.Provider value={'Sai Sharan'}>
       <Axios/> 
       </UserContext.Provider> */}
        

       {/* <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/dashboard/:name' exact Component={Dashboard}/>
            <Route path='/about' exact Component={About}/>
            <Route path='/task' exact Component={Axios}/>

          </Routes>
          <img src={sharanimg} height='200' width='auto'/>
          <br/>
          <a href={sharanimg} className='btn btn-primary' download='SharanReactImg'>Click Here To Download</a>


       </BrowserRouter> */}

       <SearchFilter/>
       
    </div>
  ); 
}

export default App;
