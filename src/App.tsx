import {Component} from "react";
import './App.css';
import Home from "./menu/componnent/home";
import Menu from "./menu/componnent/menu";
import { BrowserRouter as Router, 
  Routes , 
  Route,
 } from 'react-router-dom';
import ItemDetailsWithRouter from "./items/componnent/item-details";
import NotDefindeMenuChild from './menu/componnent/not-definde-menu-child';


class App extends Component {

  render(){  
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Menu />} key="menu" children={[
              <Route path='/' element={<Home/>} key="home"/> , 
              <Route path='/itemDetailse/:id' element={<ItemDetailsWithRouter /> } key="itemDetailse"/>,
              <Route path="/notDefindeMenuChild" element={<NotDefindeMenuChild /> } key="notDefindeMenuChild"/>
            ]} />
          </Routes>
       </Router>      
      </div>
    );
  }
}

export default App;
