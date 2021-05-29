import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
import {Switch , Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/aboutUs" component={Aboutus}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
        <Route  exact path ='/contact' component={Contact}></Route>
      </Switch>
    </>
  );
}

export default App;
