import React from "react";
import { Container, Logo, Menu } from "./style";
import LogoImg from "../../assets/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <Container>
            <Logo>
                <Link to='/'><img src={LogoImg} alt="" /></Link>
            </Logo>

            <Menu>
                <ul>
                    <li>
                        <Link to='/cadastro'><span>Cadastro</span></Link> <Link to='/login'><span>/Login</span></Link>
                    </li>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header;