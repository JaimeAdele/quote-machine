import './App.css';
import { useState } from 'react';
import Quote from './components/Quote'
import quotes from './data/quotes';
import colors from './data/colors';

function App() {
  const root = document.querySelector(':root');

  const [color, setColor] = useState(colors[Math.floor(Math.random() + colors.length)]);
  root.style.setProperty('--main-color', color);

  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const changeQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    root.style.setProperty('--main-color', color);
  }

  return (
    <div className='App'>
      <Quote color={color} quote={quote} changeQuote={changeQuote} />
      
    </div>
  );
}

export default App;
