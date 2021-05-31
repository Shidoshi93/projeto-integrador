import styled from 'styled-components';
import '../../../src/fonts.css';

export const Section = styled.section`
height: 100vh;
display: flex;
flex-wrap: wrap;
align-items: center;
`
export const Form = styled.form`
width: 45%;
margin: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`
export const DivForm = styled.div`
border-radius: 7px;
border: 2px solid #F38D68;
border-top: 15px solid #F38D68;
padding: 30px 70px;
box-shadow: 15px 10px rgba(0, 0, 0, 0.2);
background-color: #F2F2F2;
flex-basis: 100%;
margin-bottom: 20px;
`
export const DivLabel = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-bottom: 20px;
`
export const Select = styled.select`
height: 20px;
border-radius: 5px;
border: 1px solid #F38D68;
background-color: white;
width: 150px;
text-align: center;
`
export const Textarea = styled.textarea`
display: block;
margin: auto;
resize: none;
border-radius: 5px;
border: 1px solid #F38D68;
width: 75%;
height: 100px;
margin-top: 10px;
margin-bottom: 20px;
padding: 5px 10px;
`

export const ButtonLimpar = styled.button`
height: 50px;
border-radius: 25px;
width: 200px;
color: white;
border: none;
font-weight: 700;
font-size: 1.2rem;
background-color: #F08080;

&:hover{
    cursor: pointer;
}
`
export const ButtonEnviar = styled.button`
height: 50px;
border-radius: 25px;
width: 200px;
color: white;
border: none;
font-weight: 700;
font-size: 1.2rem;
background-color: #2BB67E;

&:hover{
    cursor: pointer;
}
`
export const Span = styled.span`
display: block;
`
export const Titulo = styled.div`
background-color: #F2F2F2;
margin: auto;
padding: 20px;
color: #F38D68;
font-weight: 700;
font-size: 2rem;
flex-basis: 60%;
outline: none;
font-family: 'Lato';
box-sizing: border-box;
font-weight: 700;
`
