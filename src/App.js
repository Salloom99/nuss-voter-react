import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCircleStop,
  faAddressBook,
  faClipboard,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import "./normalize.css";
import "./style.css";

function MenuButton(props) {
  function handleClick() {
    props.clicked();
    document.querySelector(".menu__btn").classList.toggle("change");
  }
  return (
    <div className="menu__btn" onClick={handleClick}>
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
  const text = props.text;
  const icon = props.icon;
  const href = props.href;

  return (
    <li>
      <FontAwesomeIcon icon={icon} style={{width: '2.5rem'}}/>
      <a className="menu__item" href={href}>
        {text}
      </a>
    </li>
  );
}

function MenuList(props) {
  const expanded = props.expanded;
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
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      expanded: false,
    };
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const expanded = this.state.expanded;

    return (
      <div className="menu">
        <MenuBanner clicked={this.handleClick} />
        <MenuList expanded={expanded} />
      </div>
    );
  }
}

function TableFiller() {
  return (
    <tr>
      <td colSpan="3" className="filler">
        اذهب لقائمة إدارة المرشحين بالضغط على القائمة بالأعلى ثم أضف مرشحيك
      </td>
    </tr>
  );
}

function NomineeRow(props) {
  const name = props.name;
  const index = props.index;
  const votes = props.votes;

  return (
    <tr>
      <td className="col-center">{index}</td>
      <td>{name}</td>
      <td className="col-counter">{votes}</td>
    </tr>
  );
}

class NomineesTable extends Component {
  state = {
    nominees: [
      { name: "محمد سالم دوماني", votes: 255 },
      { name: "محمد جسور حاج رضوان", votes: 245 },
      { name: "سامر القمحة", votes: 230 },
    ],
  };
  render() {
    const count = 271;
    const nominees = this.state.nominees;
    const nomineesRows = nominees.map((nominee, index) => {
      return (
        <NomineeRow
          key={nominee.name}
          index={index + 1}
          name={nominee.name}
          votes={nominee.votes}
        />
      );
    });

    return (
      <table className="nominees-table">
        <colgroup>
          <col className="table-index" />
          <col className="table-name" />
          <col className="table-count" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ textAlign: "start" }}>المرشح</th>
            <th>عدد الأصوات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col-center">0</td>
            <td>العدد الكلي</td>
            <td className="col-counter">
              <span className="counter">{count}</span>
            </td>
          </tr>
          {nomineesRows}
          {nominees.length > 2 ? null : <TableFiller />}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3"></td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

function App() {
  return (
    <div className="container-flex">
      <section className="card card--dashboard">
        <Menu />
        <NomineesTable />
      </section>
      <div className="snackbar-stack"></div>
    </div>
  );
}

export default App;
