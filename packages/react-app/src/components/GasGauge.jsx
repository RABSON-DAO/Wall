import { Button } from "antd";
import React from "react";
import {sber} from "../sber.svg";

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
        window.open("https://wmzsale.biz/exchange-USDTERC20-to-SBERRUB/");
      }}
      size="large"
      shape="round"
    >
      <span style={{ marginRight: 8 }}>
        <span role="img" aria-label="fuelpump">
          {sber}
          {/* ⛽️ */}
        </span>
      </span>
      {typeof props.gasPrice === "undefined" ? 0 : parseInt(props.gasPrice, 10) / 10 ** 9}g
    </Button>
  );
}
