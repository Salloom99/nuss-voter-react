import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuBackButton = ({ clicked }) => {
  function handleClick() {
    clicked();
  }

  return (
    <div className="menu__btn" onClick={handleClick}>
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
      {children}
      <span className="title title--right">{unit}</span>
    </div>
  );
};

function LinkItem({ text, icon, href }) {
  return (
    <li>
      <FontAwesomeIcon icon={icon} style={{ width: "2.5rem" }} />
      <Link className="menu__item" to={href}>
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
    <li>
      <FontAwesomeIcon icon={icon} style={{ width: "2.5rem" }} />
      <a className="menu__item" href="/none" onClick={handleClick}>
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
    <div className={`menu__list`}>
      <ul>{children}</ul>
    </div>
  );
}

function SimlpleMenu(props) {
  function handleClick() {
    props.onBackClicked();
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
  state = { collapsed: true };
  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { unit } = this.props;
    const { collapsed } = this.state;

    return (
      <div className={collapsed ? "menu menu--collapsed" : "menu"}>
        <MenuBanner unit={unit.name}>
          <MenuButton clicked={this.handleClick} />
        </MenuBanner>
        {this.props.children}
      </div>
    );
  }
}

export {
  ExpandedMenu,
  SimlpleMenu,
  State,
  ButtonItem,
  LinkItem,
  MenuList,
};
