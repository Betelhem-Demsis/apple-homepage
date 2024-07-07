import './CSS/App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Box from './component/Box';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Box/>
      <Footer />    
    </div>
  );
}

export default App;
