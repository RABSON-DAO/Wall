import { DollarCircleOutlined } from "@ant-design/icons";
import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";
import { Button, Divider, Modal } from "antd";
import React, { useState } from "react";

// added display of 0 if price={price} is not provided

/*
  ~ What it does? ~

  Displays current ETH price and gives options to buy ETH through Wyre/Ramp/Coinbase
                            or get through Rinkeby/Ropsten/Kovan/Goerli

  ~ How can I use? ~

  <Ramp
    price={price}
    address={address}
  />

  ~ Features ~

  - Ramp opens directly in the application, component uses RampInstantSDK
  - Provide price={price} and current ETH price will be displayed
  - Provide address={address} and your address will be pasted into Wyre/Ramp instantly
*/

export default function Ramp(props) {
  const [modalUp, setModalUp] = useState("down");

  const type = "default";

  const allFaucets = [];
  for (const n in props.networks) {
    if (props.networks[n].chainId !== 31337 && props.networks[n].chainId !== 1) {
      allFaucets.push(
        <p key={props.networks[n].chainId}>
          <Button
            style={{ color: props.networks[n].color }}
            type={type}
            size="large"
            shape="round"
            onClick={() => {
              window.open(props.networks[n].faucet);
            }}
          >
            {props.networks[n].name}
          </Button>
        </p>,
      );
    }
  }

  return (
    <div>
      <Button
        size="large"
        shape="round"
        onClick={() => {
      new RampInstantSDK({
                hostAppName: "Крипто на СберКарту",
                hostLogoUrl: "https://cryptosber.vercel.app/static/media/logo.8dc2a9e9.svg",
                //swapAmount: "8000000", // 0.1 ETH in wei  ?
                swapAsset: "ETH_USDT",
                userAddress: props.address,
              })
                .on("*", event => console.log(event))
                .show(); 
          //setModalUp("up");
        }}
        style={{ background: "orange"}}
      >
        💳 {/*<DollarCircleOutlined style={{ color: "#52c41a" }} />{" "} */}
        Купить Крипто {/*{typeof props.price === "undefined" ? 0 : props.price.toFixed(2)}*/}
      </Button>
      <Modal
        title="Купить USDT (ERC20 | Криптовалюта) с помощью международной банковской карты."
        visible={modalUp === "up"}
        onCancel={() => {
          setModalUp("down");
        }}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setModalUp("down");
            }}
          >
            отмена
          </Button>,
        ]}
      >
        <div id="ramp-container">  
        {/* <p>
          <Button
            type={type}
            size="large"
            shape="round"
            onClick={() => {
              window.open("https://pay.sendwyre.com/purchase?destCurrency=USDT&sourceAmount=80&dest=" + props.address);
            }}
          >
            <span style={{ paddingRight: 15 }} role="img">
              <span role="img" aria-label="flag-us">
                🇺🇸
              </span>
            </span>
            Wyre
          </Button>
        </p> */}
        <p>
          {" "}
          <Button
            type={type}
            size="large"
            shape="round"
            onClick={() => {
              /* new RampInstantSDK({
                hostAppName: "rabson-wallet",
                hostLogoUrl: "../logo.svg",
                //swapAmount: "8000000", // 0.1 ETH in wei  ?
                swapAsset: "ETH_USDT",
                userAddress: props.address,
              })
                .on("*", event => console.log(event))
                .show(); */
                window.open("https://buy.ramp.network/?swapAsset=ETH_ETH&hostLogoUrl=https://cryptosber.vercel.app/static/media/logo.8dc2a9e9.svg&userAddress=" + props.address);
            }}
          >
            <span style={{ paddingRight: 15 }} role="img">
              <span role="img" aria-label="flag-gb">
              💳
              </span>
            </span>
            Ramp
          </Button>
          {/* {new RampInstantSDK({
  hostAppName: 'Your App',
  hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
  variant: 'embedded-desktop',
  containerNode: document.getElementById('ramp-container'),
}).show()} */}
        </p>

        <p>
          <Button
            type={type}
            size="large"
            shape="round"
            /* onClick={() => {
              window.open("https://www.coinbase.com/buy-ethereum");
            }} */
          >
            <span style={{ paddingRight: 15 }} role="img" aria-label="bank">
              🏦
            </span>
            Coinbase
          </Button>
        </p>
      </div>
       {/*  <Divider />
       

        <h2>Testnet ETH</h2>

        {allFaucets} */}
      </Modal>
    </div>
  );
}
