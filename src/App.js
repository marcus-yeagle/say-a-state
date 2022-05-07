import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import logo from './microphone.svg';
import map from './map.svg';
import './App.css';

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header">Welcome to Say-a-State!</h1>
        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            className="main-btn"
            onClick={SpeechRecognition.startListening}
          >
            Start
          </Button>
          <Button
            variant="danger"
            className="main-btn"
            hidden={!listening}
            onClick={SpeechRecognition.stopListening}
          >
            Stop
          </Button>
          <Button
            variant="outline-danger"
            className="main-btn"
            onClick={resetTranscript}
          >
            Clear
          </Button>
        </div>
      </Container>
      <Container>
        <p hidden={!transcript}>You said: {transcript}</p>
      </Container>
      <Container>
        <img src={map}></img>
      </Container>
    </div>
  );
}

export default App;
