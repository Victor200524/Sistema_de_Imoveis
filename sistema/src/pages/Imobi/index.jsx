import React, { Fragment } from "react";
import { Containter, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileIMG, Right, Thumb } from "./styles";
import TopBanner from "../../componentes/TopBanner";

const Imobi = () => {
    return(
        <Fragment>
            <TopBanner/>
            <Containter>
                <Left>
                    <Thumb>
                        <img src="https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Thumb>
                    <Description>
                        <h2>Apartamento/Alugar</h2>
                        <p>Olá! Sou proprietário de um imóvel incrível que está disponível para venda e gostaria de apresentar todos os detalhes para você. Trata-se de uma excelente oportunidade para quem busca um lugar espaçoso, bem localizado e ideal para morar ou investir. O imóvel está situado em um bairro tranquilo e valorizado, próximo a escolas, supermercados, farmácias e com fácil acesso a transporte público e principais vias da cidade. Ele possui uma área construída de 150m² em um terreno de 300m², oferecendo conforto e espaço para toda a família.</p>
                    </Description>
                </Left>
                <Right>
                    <Profile>
                        <ProfileIMG>
                            <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
                        </ProfileIMG>
                        <ProfileDescription>
                            <h3>Arnaldo José</h3>
                            <p>Sou Arnaldo José, proprietário do imóvel. Prezo pela honestidade e transparência em tudo que faço. Cuidei do imóvel com zelo e estou a disposição para esclarecer dúvidas ou ajudar no que for preciso.</p>
                        </ProfileDescription>
                    </Profile>
                    <ProfileContact>
                        <h3>Informações Para Contato:</h3>
                        <p>(18) 99999-999</p>
                        <p>arnaldo.jose@hotmail.com</p>
                    </ProfileContact>
                    <ProfileFormContact>
                        <h3>Contate o anunciante:</h3>
                        <form>
                            <input type="text" placeholder="Nome"/>
                            <input type="text" placeholder="Email"/>
                            <textarea placeholder="Mensagem" name="" id="" cols="30" rows="10"></textarea>
                            <button>Enviar Mensagem</button>
                        </form>
                    </ProfileFormContact>
                </Right>
            </Containter>
        </Fragment>
    )
} 


export default Imobi;