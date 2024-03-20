import React from "react";
import "./Footer.css";
import LogoUpcode from "../../image/logo_upcode.png";

const Footer = () => {
  return (
    <footer >
      <div className="footer-izq">
        <img src={LogoUpcode} />
      </div>
      <div className="footer-der">
        <div>
          <p>
            Email: <a href="mailto:contacto@upcode.cl">contacto@upcode.cl</a>
          </p>
          <p>
            Celular: <a href="tel:+56978560879">+56 9 7856 0879</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
