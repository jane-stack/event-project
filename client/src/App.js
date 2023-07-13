import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <div className="App">
      <Switch>
        <Route path="/main">
          Main Page, aka HOME
        </Route>
        <Route path="/"><LoginPage /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
