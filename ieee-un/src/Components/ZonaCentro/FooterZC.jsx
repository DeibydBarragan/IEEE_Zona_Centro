import React from "react";
import paginaIcon from "../../Assets/zonaCentro/Icono_IEEE.png"
import "../../Styles/FooterZC.sass"
export default  function FooterZC() {
  return (
    <div className="footer">
      <div className="footer-titulo">
        <h2>IEEE UN</h2>
        <img src={paginaIcon} alt="" />
      </div>
      <div className="footer-Iconos_redes">
        <a href="https://www.facebook.com/ieeeunbog/?locale=es_LA"><span className="fb_Icon"></span></a>
        <a href="https://www.instagram.com/ramaieeeun/?hl=es"><span className="ig_Icon"></span></a>
        <a href="https://www.linkedin.com/company/ieee-un/?originalSubdomain=co"><span className="in_Icon"></span></a>
      </div>
    </div>
  );
}