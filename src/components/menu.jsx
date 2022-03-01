import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCircleStop,
  faAddressBook,
  faClipboard,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

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

function MenuBanner(props) {
  function handleClick() {
    props.clicked();
  }

  return (
    <div className="menu__banner">
      <MenuButton clicked={handleClick} />
      <span className="title title--right">
        كلية الهندسة الميكانيكية والكهربائية
      </span>
    </div>
  );
}

function MenuItem(props) {
  const { text, icon, href } = props;

  return (
    <li>
      <FontAwesomeIcon icon={icon} style={{ width: "2.5rem" }} />
      <a className="menu__item" href={href}>
        {text}
      </a>
    </li>
  );
}

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

class Menu extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      expanded: false,
    };
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { expanded } = this.state;

    return (
      <div className="menu">
        <MenuBanner clicked={this.handleClick} />
        <MenuList expanded={expanded} />
      </div>
    );
  }
}

export default Menu;