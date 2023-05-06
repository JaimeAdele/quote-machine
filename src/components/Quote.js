import React from 'react';
import './quote.css';

const Quote = ({quote, changeQuote}) => {

  return (
    <div>
      <div id='quote-box'>
        <h1 id='text'><i className="inline fa-sharp fa-solid fa-quote-left"></i>{quote.text}</h1>
        <p id='author'>- {quote.author}</p>
        <div id='buttons'>
          <a id='tweet-quote' href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${encodeURIComponent(quote.text)}%22`} target='_blank'><div className='social-button'><i className="fa-brands fa-twitter"></i></div></a>
          <a id='tumbler-quote' href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Joshua%20J.%20Marine&content=${encodeURIComponent(quote.text)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} target='_blank'><div className='social-button'><i className="fa-brands fa-tumblr"></i></div></a>
          <button id='new-quote' onClick={changeQuote}>New quote</button>
        </div>
      </div>
      <footer id='div-footer'>by jaimeadele</footer>
    </div>
  )
}

export default Quote