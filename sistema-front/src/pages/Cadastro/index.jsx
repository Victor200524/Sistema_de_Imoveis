import React from "react"; 
import { Container, ContainerForm, Form, Label } from "./styles.js";
import Input from "../../componentes/Input/index.jsx";
import Button from "../../componentes/Button/index.jsx";

const Cadastro = () => {
    return(
        <Container>
            <h2>Criar sua conta</h2>
            <p>Cadastra-se para acessar a plataforma</p>
            <ContainerForm>
                <Form>
                    <Label>
                        Nome
                    </Label>
                    <Input type="text" placeholder="Informe seu nome"/>
                    
                    <Label>
                        E-mail
                    </Label>
                    <Input type="text" placeholder="Informe seu E-mail"/>

                    <Label>
                        Senha
                    </Label>
                    <Input type="text" placeholder="Informe sua senha"/>
                    <Button>Fazer Login</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Cadastro;