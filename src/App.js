import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
// import { BrowserRouter,Route} from "react-router-dom";
import Courses from './component/Headerothers/Courses';
import Instructor from './component/Headerothers/Instructor';
import Pricing from './component/Headerothers/Pricing';
import About from './component/Headerothers/About';
import Check from './component/Headerothers/Check';
import NotFound from './component/Headerothers/NotFound';
import Instructors from './component/Headerothers/Instructors';

function App() {
  return (
    <>
      <BrowserRouter>

      <Header></Header>
      <Check></Check>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path='/instructor/:name' element={<Instructor/>}></Route>
          <Route path='/instructors/' element={<Instructors/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
