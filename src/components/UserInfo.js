import { Link } from 'react-router-dom';
import React,{useState,useEffect} from "react";

import {Container,Image} from "react-bootstrap";

import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import HeaderIcon from '../header-icon-sample.jpg';
import icon from "../icon-sample.jpeg";

import TeamLabel from "./TeamLabel"

const UserInfo = ({user,team,support_info}) => {
  const [image,setImage] = useState("")
  const [name,setName] = useState("")
  const [header_image,setHeaderImage] = useState("")
  const [biography,setBiography] = useState("")

  useEffect(() => {
    setImage(user.image)
    setName(user.name)
    setHeaderImage(user.header_image)
    setBiography(user.biography)
  },[])
  return (
    <>
      <div className="text-center" style={{backgroundImage: `url(${HeaderIcon}`, height: "200px", maxWidth: "100%", backgroundSize: "cover", backgroundPosition: "center", objectFit: "cover"}}>
        <Image className="user-icon border border-white border-2" src={icon} style={{marginTop: "6.5rem"}} roundedCircle />
      </div>
      <Container>
        <div className="text-center" style={{marginTop: "2.5rem"}}>
          <div class="h4">{name}</div>
        </div>
        <div className="text-end pe-2" style={{marginTop: "-2.75rem", marginBottom: "2.75rem"}}>
          <Link to="/user/edit" className="btn btn-secondary rounded-pill py-2 px-2">
            <span style={{marginLeft:"2px", marginRight:"2px"}}>
              <FontAwesomeIcon className="fa-fw text-white" icon={faUserCog}></FontAwesomeIcon>
            </span>
            <span className="d-none d-md-inline small">ユーザー情報を編集する</span>
          </Link>
        </div>
        <div className="text-start" style={{marginTop: "-6.5rem", marginBottom: "6.5rem"}}>
          <TeamLabel team={team} />
        </div>
        { user.biography &&
        <div className="border rounded rounded-3 bg-light mb-5 px-3 py-1">
          <div>
            {
              user.biography.split('\n').map((str, index) => (
                <React.Fragment key={index}>{str}<br /></React.Fragment>
                ))
            }
          </div>
        </div>
        }
        {support_info.first_match &&
          <>
            <h6>{`初観戦:${support_info.first_match}`}</h6>
            <h6>{`最近の観戦:${support_info.latest_match}`}</h6>
          </>
        }
      </Container>
    </>
  );
}
export default UserInfo;