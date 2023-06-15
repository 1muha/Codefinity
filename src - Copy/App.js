import './App.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Animation from './components/Navbar/Animation'
import Section from './components/Section/Section';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Animation />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;