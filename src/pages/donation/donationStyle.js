import styled from 'styled-components';
import '../../../src/fonts.css';
import backgroundImg from '../../images/fundo.png';

export const Section = styled.section`
height: 75vh;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
background-image: url(${backgroundImg});
background-size: 130% 100%;
`
export const Titulo = styled.div`
background-color: #F2F2F2;
margin: .5% auto;
padding: 1%;
color: #F38D68;
font-weight: 700;
font-size: 2rem;
width: 40%;
outline: none;
font-family: 'Lato';
box-sizing: border-box;
font-weight: 700;
text-align: center;
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
padding: 2% 5%;
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
height: 22px;
border-radius: 5px;
border: 1px solid #F38D68;
background-color: white;
width: 40%;
text-align: center;
font-size: 1rem;
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
font-size: 1rem;
`
export const Span = styled.span`
display: block;
`
