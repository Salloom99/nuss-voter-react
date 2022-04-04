import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuBackButton = ({ onClick }) => {
  return (
    <div className="menu__btn" onClick={onClick}>
      <div className="arrow1"></div>
      <div className="bar2"></div>
      <div className="arrow2"></div>
    </div>
  );
};

function MenuButton(props) {
  const menuBtn = React.createRef();

  function handleExpand() {
    props.clicked();
    menuBtn.current.classList.toggle("change");
  }
  return (
    <div className="menu__btn" ref={menuBtn} onClick={handleExpand}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

const MenuBanner = ({ children, unit }) => {
  return (
    <div className="menu__banner">
      <span className="menu__title title">{unit}</span>
      {children}
    </div>
  );
};

function LinkItem({ text, icon, href }) {
  return (
    <li className="menu__item">
      <FontAwesomeIcon className="menu__item__icon" icon={icon} style={{ width: "2.5rem" }} />
      <Link className="menu__item__link" to={href}>
        {text}
      </Link>
    </li>
  );
}

function ButtonItem({ text, icon, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <li className="menu__item">
      <FontAwesomeIcon className="menu__item__icon" icon={icon} style={{ width: "2.5rem" }} />
      <a className="menu__item__link" href="/none" onClick={handleClick}>
        {text}
      </a>
    </li>
  );
}

function State({ value }) {
  function getState(state) {
    if (state === "A") return "العملية جارية";
    else if (state === "S") return "العملية متوقفة";
    else return "العملية منتهية";
  }

  return <span className="state">{getState(value)}</span>;
}

function MenuList({ children }) {
  return (
      <ul className="menu__list">{children}</ul>
  );
}

function SimlpleMenu(props) {
  function handleClick() {
    props.onBackClicked();
  }

  return (
    <div className="menu">
      <MenuBanner unit={props.unit}>
        <MenuBackButton onClick={handleClick} />
      </MenuBanner>
    </div>
  );
}

function ExpandedMenu({ unit, children }) {
  const [collapsed, setCollapsed] = useState(true);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={collapsed ? "menu menu--collapsed" : "menu"}>
      <MenuBanner unit={unit.name}>
        <MenuButton clicked={handleClick} />
      </MenuBanner>
      {children}
    </div>
  );
}


export { ExpandedMenu, SimlpleMenu, State, ButtonItem, LinkItem, MenuList };
