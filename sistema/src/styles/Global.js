import {createGlobalStyle} from "styled-components";


export default createGlobalStyle`
    *{ // reseta as margens e deixa o conteudo alinhado no navegador
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{ //cores que utiliza no projeto
        --primary: #F1F2F3;
        --secondary: #15181C;
        --gray: #D9D9D9;
        --blue: #4766FF;
        --white: #FFF;
        --gray-light: #F5F5F5;
        --shade: #E8E8E8;
        --black: #000;
        --primary-dark: #15181C;
    }
    
    body{
        background-color: var(--primary);
        color: var(--secondary);
        font-family: "Dosis", serif;
        font-size: 1.2rem;
        font-weight: 400; 
    }

    ul,nav{
        list-style: none;
    }
    a{
        text-decoration: none;
    }

`
    
