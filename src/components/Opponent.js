import React, { useState } from "react"
import { Card, Container, Modal, Row, Col } from "react-bootstrap"
import OpponentDetail from "./OpponentDetail";
import {ReactComponent as Emblem} from '../emblem.svg';

const Opponent = ({ clubMatchResult }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card variant="link text-secondary button_link" onClick={handleShow} show={show}>
        <Card.Header className="align-items-end text-start">
          {/* <img src={Emblem} width="25" height="25" alt="エンブレム" className="me-1" style={{verticalAlign: "middle"}} style={{fill: "#E6002C"}} /> */}
          <Emblem className="me-1" height="25" width="25" fill={`${clubMatchResult.team.color_code}`} style={{verticalAlign: "middle"}} />
          <span style={{fontSize: "1.3rem"}} style={{verticalAlign: "middle"}}>{clubMatchResult.team.name}</span>
        </Card.Header>
        <Card.Body className="py-2">
          <Row>
            <Col xs={7} className="text-end">
              <div>
                <span style={{fontSize: "5rem",Color: "tomato"}} >{clubMatchResult.total.win + clubMatchResult.total.lose + clubMatchResult.total.draw}</span><span>戦</span>
              </div>
              <div style={{marginTop: "-1rem"}}>勝率：
                <span style={{fontSize: "2rem"}}>
                  {clubMatchResult.total.win + clubMatchResult.total.lose + clubMatchResult.total.draw === 0 ? Math.round(parseFloat(clubMatchResult.total.win)/(clubMatchResult.total.win + clubMatchResult.total.lose + clubMatchResult.total.draw)*100000)/1000 : 0}
                </span>
                <span style={{fontSize: "0.75rem"}}>%</span>
                </div>
            </Col>
            <Col xs={4} className="text-start" style={{marginLeft: "1.25rem"}}>
              <div className="pt-2"><span style={{fontSize: "2rem"}}>{clubMatchResult.total.win}</span>勝</div>
              <div className="pt-2"><span style={{fontSize: "2rem"}}>{clubMatchResult.total.lose}</span>敗</div>
              <div className="pt-2"><span style={{fontSize: "2rem"}}>{clubMatchResult.total.draw}</span>分</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-light">
          <Emblem className="me-1" height="25" width="25" fill={`${clubMatchResult.team.color_code}`} style={{verticalAlign: "middle"}} />
          <span style={{verticalAlign: "middle"}}>{clubMatchResult.team.name}</span>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
        </Modal.Header>
        <Modal.Body>
          <OpponentDetail clubMatchResultDetail={clubMatchResult} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Opponent;

// [
//   {
//     club_id: 1,
//     opponent_name: "鹿島アントラーズ",
//     
//   },
//   {
//     type: "",
//     win: 5,
//     lose: 0,
//     draw: 1,
//   },
//   {
//     type: "ホーム",
//     win: 5,
//     lose: 0,
//     draw: 1,
//   },
//   {
//     type: "アウェイ",
//     win: 5,
//     lose: 0,
//     draw: 1,
//   },
// ]