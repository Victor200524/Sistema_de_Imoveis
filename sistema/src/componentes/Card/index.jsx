import React from "react";
import { FaMapMarkerAlt,FaArrowRight } from "react-icons/fa"
import { Container, Description, Img, Itens } from "./styles";

const Card = () => {
    return(
        <Container>
            <Img>
                <img src="https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Img>
            <Description>
                <h4> Apartamento</h4>
                <Itens>
                    <span> <FaMapMarkerAlt/> Vila Buarque, São Paulo</span>
                    <span>R$ 2.400,00 / mês</span>
                </Itens>
                <a href = "#"> Detalhes<FaArrowRight/></a>
            </Description>
        </Container>    
    )
}

export default Card;