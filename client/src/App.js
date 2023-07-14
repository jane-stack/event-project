import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import EventList from './pages/EventList';
import EventDetail from './components/EventDetail';
import NewEventForm from './forms/NewEventForm';

function App() {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    fetch(`/attendances`)
    .then(resp => resp.json()).then(data => setAttendances(data))
  }, [])

  // handles add new attendances
  const addAttendee = (newAttendee) => {
    setAttendances([...attendances, newAttendee]);
  }

  return (
    <BrowserRouter>
    <NavBar />
    <div className="App">
      <Switch>
        <Route path="/create"><NewEventForm /></Route>
        <Route path="/events/:id"><EventDetail addAttendee={addAttendee} /></Route>
        <Route path="/main">
          <p>Rending all my Events</p>
        </Route>
        <Route path="/events"><EventList /></Route>
        <Route path="/"><LoginPage /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
