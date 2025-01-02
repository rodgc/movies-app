import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';

import { Home } from './pages/Home/Home';
import { Favorites } from './pages/Favorites/Favorites';

import './App.css';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
