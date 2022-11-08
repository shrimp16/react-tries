import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { PopUp, PopUpController } from './components/popUp';

function App() {
  const [show, setShow] = useState(false);
  const controller = new PopUpController(show, setShow);

  return (
    <>
      <PopUp controller={controller} />
      <button onClick={() => controller.showPopUp()}>Click me!</button>
      <button onClick={() => controller.hidePopUp()}>Click Me Too!</button>
    </>
  );
}

export default App;
