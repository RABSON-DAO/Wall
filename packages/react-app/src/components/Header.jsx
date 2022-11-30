import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header( props ) {
  return (
   
      <Logo />,
      <PageHeader
        title={(
          <a href="" >
            {window.innerWidth<600?"🏗":"🏗 Rabson"}
          </a>
        )}
        /* subTitle=<a href="https://github.com/scaffold-eth/punk-wallet">
          {window.innerWidth<600?"":"info/code"}
        </a> */
        style={{ cursor: "pointer",fontSize:32 }}
        extra={props.extra}
      />

  );
}
