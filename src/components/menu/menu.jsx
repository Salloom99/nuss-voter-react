import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCircleStop,
  faAddressBook,
  faClipboard,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

const MenuBackButton = () => {
  return (
    <div className="menu__btn">
      <div className="arrow1"></div>
      <div className="bar2"></div>
      <div className="arrow2"></div>
    </div>
  );
};

function MenuButton(props) {
  function handleExpand() {
    props.clicked();
    document.querySelector(".menu__btn").classList.toggle("change");
  }
  return (
    <div className="menu__btn" onClick={handleExpand}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

const MenuBanner = ({ children, unit }) => {
  return (
    <div className="menu__banner">
      {children}
      <span className="title title--right">{unit}</span>
    </div>
  );
};

const MenuItem = ({ text, icon, href }) => {
  return (
    <li>
      <FontAwesomeIcon icon={icon} style={{ width: "2.5rem" }} />
      <a className="menu__item" href={href}>
        {text}
      </a>
    </li>
  );
};

function MenuList(props) {
  const { expanded } = props;
  const className = expanded ? "" : "menu__hidden";
  return (
    <div className={`menu__list ${className}`}>
      <span className="state">العملية جارية</span>
      <ul>
        <MenuItem text={"إيقاف العملية"} icon={faCirclePause} href={"#"} />
        <MenuItem text={"إنهاء العملية"} icon={faCircleStop} href={"#"} />
        <MenuItem
          text={"إدارة المرشحين"}
          icon={faAddressBook}
          href={"/nominees.html"}
        />
        <MenuItem text={"القائمة الانتخابية"} icon={faClipboard} href={"#"} />
        <MenuItem
          text={"تسجيل الخروج"}
          icon={faArrowRightFromBracket}
          href={"/login.html"}
        />
      </ul>
    </div>
  );
}

function SimlpleMenu(props) {
  function handleClick() {
    console.log("back to main menu");
  }

  return (
    <div className="menu">
      <MenuBanner unit={props.unit}>
        <MenuBackButton clicked={handleClick} />
      </MenuBanner>
    </div>
  );
}

class ExpandedMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { expanded } = this.state;
    const { unit } = this.props;

    return (
      <div className="menu">
        <MenuBanner unit={unit}>
          <MenuButton clicked={this.handleClick} />
        </MenuBanner>
        <MenuList expanded={expanded} />
      </div>
    );
  }
}

export  {ExpandedMenu, SimlpleMenu};
