import React from "react"; 
import { Container, ContainerForm, Form, Label } from "./styles.js";
import Input from "../../componentes/Input/index.jsx";
import Button from "../../componentes/Button/index.jsx";

const Login = () => {
    return(
        <Container>
            <h2>Acesse a sua conta:</h2>
            <p>Entre com seu email e senha:</p>
            <ContainerForm>
                <Form>
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

export default Login;