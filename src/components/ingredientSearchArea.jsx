import React from 'react';
import Button from './button.jsx';
import TextArea from './textArea.jsx';

var IngredientSearchArea = React.createClass ({
  getInitialState: function()  {
    return {numClicks: 3};
  },

  handleChange: function(event) {
    const derivativesArray = this.props.derivatives;
    const ingredient = event.target.value;

    function isDerivative(ingredient) {   //Extract function and call on array
      return (
        derivativesArray.find(
          derivative => derivative == ingredient
        )
      );
    }
    return alert(isDerivative(ingredient));
  },

  render: function () {
    return (<div className="ingredient-input-section">
      <form>
        <TextArea placeholder="Paste ingredient list here" onChange={this.handleChange} />
        <Button label="Submit!" />
      </form>
    </div>
    )}
});

module.exports = IngredientSearchArea;

