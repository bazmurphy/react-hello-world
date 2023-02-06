import reactLogo from './assets/react.svg'
import './App.css'

import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src={reactLogo} className="logo"/>
      <h1>Hello World!</h1>
      <span className="small">(from React)</span>
      <h2><span className="from">by</span> Baz</h2>
      <span className="emoji">😎</span>
      <button className="button" onClick={() => setCount((count) => count + 1)}>
        React.useState()<br />Counter: {count}
      </button>
    </div>
  )
}

export default App;
