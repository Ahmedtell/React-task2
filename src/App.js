import './App.css';
import Header from './Header';
import Hero from './Hero';
import Intro from './Intro';
import Intro2 from './Intro2';
import Undraw from './Undraw';
import Cta from './Cta';
import Pricing from './Pricing';
import Footer from './Footer';
export default function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Undraw/>
      <Intro/>
      <Intro2/>
      <Cta/>
      <Pricing/>
      <Footer/>
    </div>
  );
}
