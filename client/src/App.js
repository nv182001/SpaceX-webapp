import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header"
import Home from "./components/Home"
import Launches from './components/Launches';
import Error from './components/Error';
import "./components/css/App.css"

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/launches" component={Launches}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App


