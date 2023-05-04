import React from 'react';
import './quote.css';

const Quote = ({quote, changeQuote}) => {

  return (
    <div>
      <div id='quote-box'>
        <h1 id='text'><i className="inline fa-sharp fa-solid fa-quote-left"></i>{quote.text}</h1>
        <p id='author'>- {quote.author}</p>
        <div id='buttons'>
          <a id='tweet-quote' href='https://twitter.com/intent/tweet' target='_blank'><div className='social-button'><i className="fa-brands fa-twitter"></i></div></a>
          <a id='tumbler-quote' href='https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Joshua%20J.%20Marine&content=Challenges%20are%20what%20make%20life%20interesting%20and%20overcoming%20them%20is%20what%20makes%20life%20meaningful.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button' target='_blank'><div className='social-button'><i className="fa-brands fa-tumblr"></i></div></a>
          <button id='new-quote' onClick={changeQuote}>New quote</button>
        </div>
      </div>
      <footer id='div-footer'>by jaimeadele</footer>
    </div>
  )
}

export default Quote