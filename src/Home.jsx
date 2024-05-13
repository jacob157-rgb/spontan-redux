import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const number = [0, 1, 2, 3, 4];

  return (
    <>
      <div>
        <h1>Home</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>

      <div>
        <h3>Looping</h3>
        <ul>
          {number.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Conditional Rendering</h3>

        <ul>
          {number.map((num) => (
            <li key={num}>
              {num === 0 ? '0 is zero' : `${num} ${num % 2 === 0 ? 'Even' : 'Odd'}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
