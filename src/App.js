import Container from 'react-bootstrap/Container';
import logo from './microphone.svg';
import map from './map.svg';
import './App.css';

import Dictaphone from './Dictaphone';

function App() {
  return (
    <div className="App">
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header">Welcome to Say-a-State!</h1>
        <Dictaphone></Dictaphone>
      </Container>
      <Container>
        <img src={map}></img>
      </Container>
    </div>
  );
}

export default App;
