import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import Navbar from './Navbar'
import Find from './Find';
import Copro from './Copro';
import Internship from './Internship';
import Icard from './Icard';
import Designer from './Designer';
import Marketing from './Marketing';
import Other from './Other';
import Developer from './Developer';
import Login from './Login';
import Register from './Register';


function App() {
  return (
   <>
   <div className="main">

    <Navbar/>
     
   <Switch>
     <Route exact path="/" component={Home}></Route>
     <Route exact path="/find" component={Find}></Route>
     <Route exact path="/copro" component={Copro}></Route>
     <Route exact path="/internship" component={Internship}></Route>
     <Route exact path="/icard" component={Icard}></Route>
     <Route exact path="/designer" component={Designer}></Route>
     <Route exact path="/marketing" component={Marketing}></Route>
     <Route exact path="/other" component={Other}></Route>
     <Route exact path="/developer" component={Developer}></Route>
     <Route exact path="/login" component={Login}></Route>
     <Route exact path="/register" component={Register}></Route>
   </Switch>
   </div>
   </>
  );
}

export default App;
