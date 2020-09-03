import React from 'react';
import FEATURES from '../index'
import Item from './Item'


function ItemsList (props) {

    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <Item 
          feature={feature}
          FEATURES={FEATURES}
          theState={props.theState}
          updateFeatures={props.updateFeatures}
          />
        </fieldset>
      );
    });

    return(
      <>
      {features}
      </>
    )
}
export default ItemsList