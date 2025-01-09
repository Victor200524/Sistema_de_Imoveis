import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 200px 150px;
  background-size: cover;
  background-position: center;
  background-image: url('https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); 
    z-index: 0;
  }
`;

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 1; 

  h2{
    color: var(--white);
    font-size: 62px;
    font-weight: 700;
    margin-bottom: 35px;
  }

  p{
    color: var(--white);
    font-size: 30px;
    margin-bottom: 25px;
  }

  span{
    background-color: var(--blue);
    border: 0;
    color: var(--white);
    font-size: 20 px;
    font-weight: 600;
    padding: 12px 120px;
    line-height: 24px;
    border-radius: 10px;

    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
    &:hover {
        transform: scale(1.5); 
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 1); 
        cursor: pointer;
    } 
  }
`;
