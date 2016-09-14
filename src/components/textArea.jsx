import React from 'react';

export default function TextArea(props){
  return <div>
      <textarea className="ingredient-input-section__text-area" placeholder={props.placeholder} onChange={props.onChange} />
  </div>

}