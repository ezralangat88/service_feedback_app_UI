import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import InvalidLink from './components/common/InvalidLink';
import About from './components/common/About';
import { FeedBackProvider } from './components/context/FeedBackContext';

function App() {


  return (
    <>
    <FeedBackProvider>
    <Router>
    <Header/>

      <Routes>
        <Route exact path='/' element={
          <>
          <div className='d-flex flex-column align-items-center' >
          <Home/>
          <Footer/>
          </div>
          </>
        }/>
        <Route exact path='/about' element={<About/>}/>
        <Route path='/*' element={<InvalidLink/>}/>
      </Routes>
    </Router>
    </FeedBackProvider>
    </>
    
  );
}

export default App;
