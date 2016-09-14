import React from 'react';

export default function Button(props){
  return <div>
    <button type="submit" className="ingredient-input-section__button" onClick={props.onClick}>{props.label}</button>
  </div>

}