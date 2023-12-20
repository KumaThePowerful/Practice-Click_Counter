import './App.css';
import Counter from './components/Counter';
import Button from './components/button';
import logo from './img/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  }

  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='container-freecodecamp-logo'>
        <img
          className='freecodecamp-logo'
          src={logo}
          alt='Freecodecamp logo'
        />
      </div>
      <div className='main-container'>
        <Counter
          numClicks={numClicks}
        />

        <Button
          text='Click'
          isClickButton={true}
          handleClick={handleClick}
        />

        <Button
          text='Reset'
          isClickButton={false}
          handleClick={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
