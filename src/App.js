import React, { useEffect, useState } from 'react';
import './App.scss';
import COLORS_ARRAY from './colorsArray.js';

function App() {
  const [contenido, setContenido] = useState("Life is what happens to you while you're busy making other plans.")
  const [writer, setWriter] = useState("John Lennon")
  const [currentColor, setCurrentColor] = useState ("#63b598")
  
  function getRandomQuote() {
    let number = Math.floor(Math.random() * COLORS_ARRAY.length);
    setCurrentColor(COLORS_ARRAY[number])
    
    fetch("https://api.quotable.io/random") 
    .then((response) => response.json())   
     .then((data)=>{
       setContenido(data.content)
       setWriter(data.author)
        }
      )
    .catch( (error) => {
      setContenido("Ha habido un error, vuelve a intentarlo")
      }
    )
  }
 
  return (
    <div className="App">
      <body style={{background: currentColor}} className="App-body">
        <div id="quote-box">
          <p id="text" style={{color: currentColor}}><i class="fa-solid fa-quote-left fa-xl"></i> {contenido}</p>
          <p id="author" style={{color: currentColor}}>- {writer}</p>
          <div className="botones" >
            <a 
              id='tweet-quote' 
              title='Tweet this quote' 
              href={`http://www.twitter.com/intent/tweet?text=${contenido} -${writer}`} 
              target='_blannk' 
              style={{color: currentColor}}><i class="fa-brands fa-twitter-square fa-2xl"></i>
            </a>
            <button id="new-quote" onClick={getRandomQuote} style={{background: currentColor}}>New Quote</button>
          </div>
        </div>
        <p id="ego">by MASC</p>
      </body>
    </div>
  );
}

export default App;
