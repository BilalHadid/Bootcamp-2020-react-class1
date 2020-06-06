import React from 'react';
import './hello.css';
import Arrfun from './hello.js'
import Mediacard from './mediaCard.js'
import ImgUrl from './images/nature.jpg'
import Gate from './Gate.js'


function App(props) {
  return (
    <div className="App">
      
      <h1>React class Task</h1>
      <p>For simple function</p>  
        Hello <strong>{props.name}</strong>
      <hr />
      <Arrfun name="Bilal Hadid" age={25}/>
      <Mediacard title="Nature" body="The study of nature is a large, if not the only, part of science. " imageurl = {ImgUrl}/>
      <Gate isOpen={true}/>

    </div>
  );
}


export default App;
