import React from 'react';
import ReactDOM from 'react-dom';

function TextArea(props){

  function runValidation() {
    return alert("I've been pressed!");
  }

    return <div>
      <div className="header-section">
        <h1 className="header-section__title">The Palm Reader</h1>
      </div>
      <div className="ingredient-input-section">
        <textarea className="ingredient-input-section__text-area" placeholder="Paste ingredient list here"></textarea>
        <button className="ingredient-input-section__button" onClick={runValidation}>Submit!</button>
      </div>
      </div>
}

ReactDOM.render(<TextArea/>, document.getElementById('text-area'));