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
    flex-direction: column; 
    align-items: center; 
`

export const ProfileIMG = styled.div`
    display: flex;
    justify-content: center; 
    margin-bottom: 10px; 
    img {
        width: 115px;
        height: 115px;
        border-radius: 50%; 
    }
`

export const ProfileDescription = styled.div`
    h3, p {
        text-align: justify;
        margin-bottom: 15px;
        color: var(--secondary);
    }
    h3  {
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
`

