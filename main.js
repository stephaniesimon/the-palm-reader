import React from 'react';
import ReactDOM from 'react-dom';
import IngredientSearchArea from './src/components/ingredientSearchArea.jsx';
import Header from './src/components/header.jsx';
const derivativesList = require('json!./src/palmOilDerivatives');

function App() {
  return <div>
    <Header />
    <IngredientSearchArea derivatives={derivativesList} />
  </div>
}

ReactDOM.render(<App/>, document.getElementById('app'));

