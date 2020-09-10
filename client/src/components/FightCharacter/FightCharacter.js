import React from "react";
import "./style.css";
import Card from "../Card";
// import { ListItem } from "../List";
// import { Row, Col } from "../Grid";

export default function FightCharacter({
  fightId,
  name,
  imgUrls,
  description,
  selectCharacterfn,
}) {
  //   <div
  //   className="allCards cardStyle  col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
  //   key={objId}
  //   onClick={() => selectCharacterfn(objId)}
  // >

  return (
    <Card>
      <div key={fightId} onClick={() => selectCharacterfn(1, fightId)}>
        <img className="card-img-top" src={imgUrls} alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{`FighterId ${fightId}`}</p>
        </div>
      </div>
    </Card>

    // <Card key={objId} title={name} image={imgUrls}>
    //   <Row>
    //     <Col size="12 sm-6 md-6">
    //       <p>{description}</p>
    //     </Col>
    //   </Row>
    // </Card>
  );
}
