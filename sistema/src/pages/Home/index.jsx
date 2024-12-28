import React, { Fragment } from "react";
import { Header, Wrapper } from "./styles";
import Card from "../../componentes/Card";


const Home = () => {
    let cards = [];
    for(let i = 0;i < 4; i++){
        cards.push(<Card key={i} />)
    }
    return(
        <Fragment>
            <Header>
                <h2>Encontre o imóvel dos seus sonhos!</h2>
            </Header>
            <Wrapper>
                {cards}
            </Wrapper>
        </Fragment>
    )
} 


export default Home;