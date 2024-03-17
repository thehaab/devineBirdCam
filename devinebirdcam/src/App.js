import './App.css';
import BirdList from './components/birdlist/BirdList';
import Webcam from './components/webcam/Webcam';  
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <BirdList />
      <Webcam />
    </>
  );
}

export default App;
