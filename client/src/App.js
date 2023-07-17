import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import EventList from './pages/EventList';
import EventDetail from './components/EventDetail';
import NewEventForm from './forms/NewEventForm';
import EventEditForm from './forms/EventEditForm';
import MainPage from './pages/MainPage';

function App() {
  
  return (
    <BrowserRouter>
    <NavBar />
    <div className="App">
      <Routes>
        <Route path="/events/:id/edit" element={<EventEditForm />} />
        <Route path="/create" element={<NewEventForm />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
