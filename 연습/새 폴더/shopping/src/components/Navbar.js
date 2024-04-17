import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

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

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`?q=${e.target.value}`);
      e.target.value = "";
    }
  };
  return (
    <div>
      <div className="nav-header">
        <div className="toggle-menu">
          <FontAwesomeIcon icon={faBars} />
          {authenticate ? (
            <div onClick={() => setAuthenticate(false)} className="login-menu">
              <FontAwesomeIcon icon={faUser} />
              <span>로그아웃</span>
            </div>
          ) : (
            <div onClick={() => setAuthenticate(true)} className="login-menu">
              <FontAwesomeIcon icon={faUser} />
              <span>로그인</span>
            </div>
          )}
        </div>
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img
            width={120}
            src="https://menu.mt.co.kr/moneyweek/thumb/2020/08/21/06/2020082114368021238_2.jpg"
            alt="img"
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, idx) => (
            <li key={idx}>
              <Link>{menu}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input onKeyUp={onCheckEnter} type="text" placeholder="상품검색" />
      </div>
    </div>
  );
};
