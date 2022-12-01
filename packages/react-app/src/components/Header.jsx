import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header( props ) {
  return (
   
      
      <PageHeader
        title={(
          <a href="" >
            {window.innerWidth<600?"Любая карта на Сбербанк 💵":"Любая карта на Сбербанк 💵"}
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
