import React from "react";
import Summary from "./Summary";
import Total from "./Total";

// this is the cart component
export default function MainSummary(props) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {Object.entries(props.selected).map((feature, idx) => 
        <Summary
          key={idx}
          feature={feature[0]}
          option={feature[1].name}
          cost={feature[1].cost}
          dollarFormat={props.dollarFormat}
        />
      )}
      <Total
      selected={props.selected}
      dollarFormat={props.dollarFormat} />
    </section>
  );
}