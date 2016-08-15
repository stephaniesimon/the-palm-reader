import React from 'react';
import ReactDOM from 'react-dom';

class TextArea extends React.Component {
  render() {
    return <div>
      <textarea className="text-area" placeholder="Paste ingredient list here"></textarea>
      </div>
  }
}

ReactDOM.render(<TextArea/>, document.getElementById('text-area'));