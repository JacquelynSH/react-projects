import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
    setText(data);
    
  }

  const paragraphCount = (e) => {
    setCount(parseInt(e.target.value))
    console.log(typeof(count))
  }


  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amout">
          paragraphs:
        </label>
        <input type="number" name='amount' id='amount' value={count}
          onChange={paragraphCount}
        />
        <button type='submit' className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return (
          <div key={index}>{item}</div>
          )
        })}
      </article>
    </section>
  )
}

export default App;
