import React from "react";

function SmallCard(props) {
  return <section className="card card--small">{props.children}</section>;
}

export default SmallCard;
