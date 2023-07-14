import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import EventList from './pages/EventList';
import EventDetail from './components/EventDetail';

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <div className="App">
      <Switch>
        <Route path="/events/:id"><EventDetail /></Route>
        <Route path="/main">
          <p>HELLO</p>
        </Route>
        <Route path="/events"><EventList /></Route>
        <Route path="/"><LoginPage /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
