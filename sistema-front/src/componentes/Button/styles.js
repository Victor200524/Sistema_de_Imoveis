import styled from "styled-components";

export const Container = styled.button`
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
        transform: scale(1); 
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 1); 
    } 
`