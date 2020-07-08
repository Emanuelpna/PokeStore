import React from "react";
import { Linkedin, GitHub } from "react-feather";

import S from "./Footer.module.css";

const Footer = () => (
  <footer className={S.FooterContainer}>
    <span className={S.FooterBlocks}>
      Feito por
      <a href="https://www.emanuelandrade.com.br/">Emanuel Andrade</a>
    </span>

    <a
      href="https://github.com/Emanuelpna"
      className={S.FooterBlocks}
      title="Meu Github"
    >
      <GitHub />
    </a>

    <a
      href="https://www.linkedin.com/in/emanuelpna/"
      className={S.FooterBlocks}
      title="Meu Linkedin"
    >
      <Linkedin />
    </a>
  </footer>
);

export default Footer;
