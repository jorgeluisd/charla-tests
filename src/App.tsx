import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerButton from "./components/CustomerButton";

const Message = () => {
  return <p>Hello from the message component!</p>
}

function App() {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showMessage && <Message />}
        <CustomerButton label={'Show Message'} onClick={() => setShowMessage(true)} />
      </header>
    </div>
  );
}

export default App;
