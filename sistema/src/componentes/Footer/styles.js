import styled from 'styled-components'

export const Containter = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    column-gap: 50px; /* Adiciona espaço entre as colunas */
    padding: 40px 150px;
    background-color: var(--gray);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); 
`

export const Item = styled.div`
    img{
        margin: auto;
        display: flex;
        width: 200px;
    }
    h3{
        margin-bottom: 10px;
    }
    ul{
        li{
            padding: 8px 0;
        }
    }
    p{
        padding: 10px 10px;
        text-align: center;
    }
    nav{
        display: flex;
        justify-content: center;
        margin: auto;
        li{
            span{
                margin-right:15px; 
                a{
                    justify-content: center;
                    align-items: center;
                    color: var(--secondary);
                    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

                    &:hover {
                        transform: scale(1.5); 
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 1); 
                    }       
                } 
            }
        }
    }
`

export const Copy = styled.div`
    background-color: var(--gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 150px;
    border-top: 1px solid rgba(0,0,0,0.1);
    ul{
        display: flex;
        align-items: center;
        li{
            span{
                margin-left: 15px;
            }
        }
    }
`