
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/index'
import Minting from './Pages/mintingpage'

function App() {
  return (
  //   <Router>
    
  //     <Switch>
  //       {/* <Route path="/" component={Home} exact /> */}
  //       <Route path="/" component={Home} exact />
  //       <Route path="/mintingpage" component={Minting} exact />

  //     </Switch>
  
  //  </Router>
      <div>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mintingpage" element={<Minting />} />
            </Routes>
        </BrowserRouter>
      </div>
      
  );
}

export default App;
