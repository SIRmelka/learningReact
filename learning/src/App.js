import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Test from './pages/Test';
import Performances from './pages/Performances';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/performances" element={<Performances/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter></>
   
  );
}

export default App;