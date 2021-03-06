import { useState } from 'react';
import { Form } from './Form';

function App() {
  const [quote, setQuote] = useState(null);

  const handleClick = () => {
    if(!quote) {
      fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => setQuote(json.title))
    } else {
      setQuote(null)
    }
    
  }

  return (
    <div className="App">
      <h1>Testing with React Testing Library</h1>
      <button onClick={handleClick}>Click</button>
      <h2>{quote? quote : 'Nothing to see here.'}</h2>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
