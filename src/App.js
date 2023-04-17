import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <div className='d-flex flex-column align-items-center' >
    <Header/>
    <Home/>
    <Footer/>
    </div>
    </>
    
  );
}

export default App;
