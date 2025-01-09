import styled from 'styled-components'


export const Container = styled.div`
    width: 24%;
    margin-bottom: 12px 150px;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);

    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

    &:hover {
        transform: scale(1.1); 
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 1); 
    } 
`

export const Img = styled.div`
    width: 100%;
    img{
        border-radius: 10px;
        width: 100%;
        height: auto;
    }

`

export const Description = styled.div`
    padding: 12px;
    a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--secondary);
    }
    h4{
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 10px;
    }
    span{

    }
`

export const Itens = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    span{
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
`

