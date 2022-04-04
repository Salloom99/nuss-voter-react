import React from "react";
import nusslogo from "../../assets/images/nuss_logo.png";

export const Logo = () => {
  return (
    <div id="logo">
      <img
        //   srcSet="
        // ../../images/nuss_logo_574w.png 574w,
        // ../../images/nuss_logo_768w.png 768w,
        // ../../images/nuss_logo.png 960w"
        src={nusslogo}
        alt="NUSS logo" />
        <span className="logo__caption">N.U.S.S</span>
    </div>
  );
};
