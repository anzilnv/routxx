import About from './component/homepage/About';
import Bnner from './component/homepage/Bnner';
import Footer from './component/homepage/Footer';
import Nextstage from './component/homepage/Nextstage';
import Navbar from './component/navbar/Navbar';
import './index.css';

function App() {
  return (
    <div className='w-full'>
      <Navbar/>
      <Bnner/>
      <About/>
     <Nextstage/>
     <Footer/>
      
    </div>
  );
}

export default App;
