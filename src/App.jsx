import './App.css';
import Count from './components/Count';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const click = () => {

    let newCount = count + 1;
    setCount(newCount);

  };

  const restart = () => {

    let newCount = 0;
    setCount(newCount);

  };

  return (

    <div className='App'>

      <Count count={count} />

      <Button
        text={'Click'}
        isButton={true}
        count={click}
      />

      <Button
        text={'Restart'}
        isButton={false}
        count={restart}
      />

    </div>

  );
};

export default App;