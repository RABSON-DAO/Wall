import { PageHeader } from "antd";
import React from "react";
import logo from "../logo.svg"

// displays a page header

export default function Header( props ) {
  return (

      <PageHeader
        title={(
          <a href="" >
            {window.innerWidth<600?{logo}:{logo}}
          </a>
        )}
        /* subTitle=<a href="https://github.com/scaffold-eth/punk-wallet">
          {window.innerWidth<600?"":"info/code"}       "🏗"
        </a> */
        style={{ cursor: "pointer",fontSize:32 }}
        extra={props.extra}
      />

  );
}
