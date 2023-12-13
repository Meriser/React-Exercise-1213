// import { useState } from 'react'
import Aside from './Aside.jsx';
import Content from './Content.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className="container mx-auto flex flex-col md:flex-row">
        <Aside />
        <Content />
      </div>
  );
}

export default App;
