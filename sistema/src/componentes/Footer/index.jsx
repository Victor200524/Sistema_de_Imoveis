import React, { Fragment } from "react";
import { Containter, Copy, Item } from "./styles";
import { FaArrowDown, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import LogoImg from "../../assets/logo.png";

const Footer = () => {
    return(
        <Fragment>
            <Containter>
                <Item>
                    <img src= {LogoImg} alt="" />
                    <p>Eu criei o ImobiExpress, um sistema prático e intuitivo para facilitar a busca, cadastro e gerenciamento de imóveis. Com ele, os usuários podem encontrar opções que atendem às suas necessidades, enquanto proprietários e imobiliárias têm uma plataforma eficiente para anunciar e administrar seus imóveis. Meu objetivo foi criar uma solução simples, funcional e acessível para conectar pessoas e oportunidades no mercado imobiliário.</p>
                    <p>Minhas Redes sociais: <FaArrowDown size={12}/> </p>
                    <nav>
                        <li><span> <a href="https://www.linkedin.com/in/victor-donaire-31b778165/"><FaLinkedin size={32}/></a> </span></li>

                        <li><span> <a href="https://www.instagram.com/victorh_donaire/"><FaInstagram size={32}/></a> </span></li>

                        <li><span> <a href="https://github.com/Victor200524"><FaGithub size={32}/></a> </span></li>
                    </nav>
                </Item>

                <Item>
                    <h3>Outros Serviços:</h3>
                    <ul>
                        <li><span>Comprar</span></li>

                        <li><span>Alugar</span></li>

                        <li><span>Vender</span></li>
                    </ul>
                </Item>

                <Item>
                    <h3>Links:</h3>
                    <ul>
                        <li><span>Comprar</span></li>

                        <li><span>Alugar</span></li>

                        <li><span>Vender</span></li>
                    </ul>
                </Item>

                <Item>
                    <h3>Informações de Contato:</h3>
                    <ul>
                        <li><span>Comprar</span></li>

                        <li><span>Alugar</span></li>

                        <li><span>Vender</span></li>
                    </ul>
                </Item>
            </Containter>
            <Copy>
                <p>© Copyright 2024 - Workside Tecnologia All Rights Reserved.</p>
                <ul>
                    <li><span>Termos de uso</span></li>
                    <li><span>Política de Privacidade</span></li>
                    <li><span>Política de Cookies</span></li>
                </ul>
            </Copy>
        </Fragment>
    )
} 


export default Footer;