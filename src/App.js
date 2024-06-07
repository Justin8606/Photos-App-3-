import logo from './logo.svg';
import './App.css';
import AddPhotos from './components/AddPhotos';
import SearchPhotos from './components/SearchPhotos';
import DeletePhotos from './components/DeletePhotos';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<AddPhotos/>}/>
        <Route path='/Search' element={<SearchPhotos/>}/>
        <Route path='/Delete' element={<DeletePhotos/>}/>
        <Route path='/View' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
