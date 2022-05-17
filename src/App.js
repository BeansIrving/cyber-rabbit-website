
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/index'
import Minting from './Pages/mintingpage'
function App() {
  return (
    <Router>
    
      <Switch>
        {/* <Route path="/" component={Home} exact /> */}
        <Route path="/" component={Home} exact />
        <Route path="/mintingpage" component={Minting} exact />

      </Switch>
  
   </Router>
  );
}

export default App;
