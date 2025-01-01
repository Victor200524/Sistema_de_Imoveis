import styled from 'styled-components'


export const Containter = styled.div`
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    width: 70%;
    padding: 10px;
    border: 1px solid rgb(0,0,0,.1);
`

export const Thumb = styled.div`
    width: 100%;
    img{
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

`

export const Description = styled.div`
    padding: 20px 0;
    h2,p{
        text-align: center;
        margin-bottom: 15px;
        color: var(--secondary);
    }
`

export const Right = styled.div`
    width: 28%;
    padding: 1%;
    border: 1px solid rgb(0,0,0,.1);
    border-radius: 5px;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column; /* Permite organizar os itens em coluna */
    align-items: center; /* Centraliza o conteúdo horizontalmente */
`

export const ProfileIMG = styled.div`
    display: flex;
    justify-content: center; /* Centraliza a imagem horizontalmente */
    margin-bottom: 10px; /* Espaçamento abaixo da imagem */
    img {
        width: 115px;
        height: 115px;
        border-radius: 50%; /* Torna a imagem circular */
    }
`

export const ProfileDescription = styled.div`
    h3, p {
        text-align: justify;
        margin-bottom: 15px;
        color: var(--secondary);
    }
    h3{
        text-align: center;
    }
`

export const ProfileContact = styled.div`
    h3,p{
        margin-bottom: 15px;
        color: var(--secondary);
    }
`

export const ProfileFormContact = styled.div`
    h3{
        margin-bottom: 15px;
        color: var(--secondary);
    }
    form{
        input,textarea{
            height: 50px;
            padding: 8px 15px;
            border-radius: 3px;
            width: 100%;
            color: var(--secondary);
            letter-spacing: 0.1px;
            font-size: 0.938rem;
            margin-bottom: 10px;
            outline: none;
            border-color: var(--black);
            border: 1px solid var(--shade);
            resize: none;
        }
        textarea{
            width: 100%;
            height: 150px;
        }
    }
    button{
        width: 100%;
        height: 50px;
        background-color: var(--blue);
        color: var(--white);
        font-size: 1rem;
        font-weight: 600;
        border-radius: 10px;
        border: 1px solid var(--black);
        cursor: pointer;
        transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
        &:hover {
            transform: scale(1.1); 
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 1); 
        } 
    }
`

