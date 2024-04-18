import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const menuList = [
  "인기",
  "상의",
  "아우터",
  "바지",
  "원피스",
  "스커트",
  "스니커즈",
  "신발",
];

function Navbar({authenticate,setAuthenticate})=>{
const navigate = useNavigate();
const onCheckEnter = (e)=>{
  if(e.key ==="Enter"){
    navigate(`q=${e.target.value}`);
    e.target.value="";
  }
};
return(
  <div calssName="nav-header">
  <div className="toggle-menu">
  <FontAwesomeIcon icon={faBars} />
  </div>
  </div>
)
}