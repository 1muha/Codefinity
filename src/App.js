import './App.css';
import Header from './components/header/Header';
import Section from './components/section/Section';
import Last from './components/last/Last';
import SwiperSlider from "./components/swiper/SwiperSlider"

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <SwiperSlider />
      <Last />
    </div>
  );
}

export default App; 