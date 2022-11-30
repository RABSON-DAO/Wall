import { Button } from "antd";
import React from "react";

// added display of 0 instead of NaN if gas price is not provided

/*
  ~ What it does? ~

  Displays gas gauge

  ~ How can I use? ~

  <GasGauge
    gasPrice={gasPrice}
  />

  ~ Features ~

  - Provide gasPrice={gasPrice} and get current gas gauge
*/

export default function GasGauge(props) {
  return (
    <Button
      onClick={() => {
        window.open("https://netex24.net/#/ru/?source=156&target=103");
      }}
      size="large"
      shape="round"
    >
      <span style={{ marginRight: 8 }}>
        <span role="img" aria-label="fuelpump">
          {/* ⛽️ */}
          💸
        </span>
      </span>
      Send to Sberbank  {/*<b>₽</b> Card  {typeof props.gasPrice === "undefined" ? 0 : parseInt(props.gasPrice, 10) / 10 ** 9}g */}
    </Button>
  );
}
