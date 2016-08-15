import React from 'react';
import ReactDOM from 'react-dom';

function TextArea(props){

  function runValidation() {
    return alert("I've been pressed!");
  }

    return <div>
      <textarea placeholder="Paste ingredient list here"></textarea>
      <button onClick={runValidation}>Submit!</button>
      </div>
}

ReactDOM.render(<TextArea/>, document.getElementById('text-area'));