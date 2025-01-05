import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 150px;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    background-color: var(--white);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`

export const Logo = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    img{
        width: 300px;
    }
`

export const Menu = styled.div`
    ul{
        display: flex; 
        justify-content: center;
        align-items: center;    
        li{
            border: 1px solid var(--gray);
            border-radius: 10px;
            padding: 10px;
            span{
                font-size: 1.2rem;
                font-weight: 300;
                color: var(--secondary);
            }    
            transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

            &:hover {
                transform: scale(1); 
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 1); 
                cursor: pointer;
            } 
        }
    }
`