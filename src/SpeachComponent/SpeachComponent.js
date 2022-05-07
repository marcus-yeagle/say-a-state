var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const states = document.getElementsByClassName('land');
const stateNames = [];
states.forEach((state) => stateNames.push(state.attributes[1].nodeValue));

const grammar =
  '#JSGF V1.0; grammar states; public <state> = ' +
  stateNames.join(' | ') +
  ' ;';
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const SpeachComponent = function (props) {};
export default SpeachComponent;
