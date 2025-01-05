import React from "react";
import errorIMG from "../../assets/error.png";
import { Container } from "./styles";

const Error = () => {
    return(
        <Container>
            <img src={errorIMG} alt="" />
        </Container>
    )
}

export default Error;