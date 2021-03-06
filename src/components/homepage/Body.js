import React from "react";
import ReactJson from "react-json-view";
import { Container } from "react-bootstrap";
import { jsonObj } from '../../data/data';

const textObj = <><p>TODAY'S MENU!</p><p>BULGOGI</p><p>EGG BACON BURGER</p><p>&FRENCH FRIES</p><p>INFO.</p></>

const Body = ({ displayTab }) => {
  return (
    <Container className="pt-3 pb-3 pl-3 pr-3 home-body" style={{ marginRight: '15px' }}>
    {displayTab === 'text'
    ? <div className="body-desc-text desc-text mt-0" style={{ fontWeight: 400 }}>{textObj}</div>
    : <ReactJson
      src={jsonObj}
      theme="rjv-default"
      displayDataTypes={false}
      enableClipboard={false}
      />
    }
    </Container>
  );
};

export default Body;