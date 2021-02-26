import './App.css';
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom";
import Mainhome from './components/Mainhome'
import Welcome from './components/Welcome';
import Timer from './components/Timer';
import Todos from './components/Todos';
import Events from './components/Events';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Mainhome} exact={true} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/timer' component={Timer} />
        <Route path='/todos' component={Todos} />
        <Route path='/events' component={Events} />
      </Switch>
    </BrowserRouter>
     
  );
}

export default App;
