import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import data from './helpers/data';
import Form from './components/Form';
import Lorem from './components/Lorem';
function App() {

  const [text, setText] = useState([])
  const [count, setCount] = useState(0)

 
  
  return (<div className='row'>
    <h3 className='text-center fw-bold mt-3'>TIRED OF BORING LOREM IPSUM?</h3>
    <Form data={data} setText={setText} count={count} setCount={setCount}/>
    <Lorem text={text}/>
  </div>
    )
}

export default App;
