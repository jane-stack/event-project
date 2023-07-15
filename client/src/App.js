import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import EventList from './pages/EventList';
import EventDetail from './components/EventDetail';
import NewEventForm from './forms/NewEventForm';
import EventEditForm from './forms/EventEditForm';
import MainPage from './pages/MainPage';
import Errors from './errors/Errors';

function App() {
  
  return (
    <BrowserRouter>
    <NavBar />
    <Errors />
    <div className="App">
      <Switch>
        <Route path="/events/:id/edit"><EventEditForm /></Route>
        <Route path="/create"><NewEventForm /></Route>
        <Route path="/events/:id"><EventDetail /></Route>
        <Route path="/main"><MainPage /></Route>
        <Route path="/events"><EventList /></Route>
        <Route path="/"><LoginPage /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
