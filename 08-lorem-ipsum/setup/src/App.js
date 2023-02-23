import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
  }

  const paragraphCount = (e) => {
    setCount(e.target.value)
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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A rem doloribus natus eligendi magnam optio, praesentium expedita cumque magni nemo repellat, impedit sit placeat earum delectus ea beatae voluptatibus. Autem?</p>
      </article>
    </section>
  )
}

export default App;
