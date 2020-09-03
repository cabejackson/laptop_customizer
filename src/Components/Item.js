import React from 'react'
import slugify from 'slugify';
import USCurrencyFormat from '../helpers'

function Item (props) {

  return props.FEATURES[props.feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(props.feature)}
          checked={item.name === props.selection[props.feature].name}
          onChange={e => props.updateFeatures(props.feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  });
  
}


export default Item