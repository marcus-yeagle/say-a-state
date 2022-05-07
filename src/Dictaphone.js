import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import Button from 'react-bootstrap/Button';

const Dictaphone = () => {
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
      <p hidden={!transcript}>You said: {transcript}</p>
    </div>
  );
};

export default Dictaphone;
