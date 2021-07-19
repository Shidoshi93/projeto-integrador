import styled from 'styled-components';
import '../../../src/fonts.css';
import backgroundImg from '../../images/fundo.png';

export const Section = styled.section`
min-height: 75vh;
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${backgroundImg});
background-size: 130% 100%;
padding-top: 110px;

@media (max-width: 990px) {
    min-height: 85vh;
}
`
export const Titulo = styled.div`
background-color: #F2F2F2;
margin: 15px auto;
padding: 20px;
color: #F38D68;
font-weight: 700;
font-size: 2rem;
width: 40%;
outline: none;
font-family: 'Lato';
box-sizing: border-box;
font-weight: 700;
text-align: center;
border-radius: 10px;;

@media (max-width: 920px) {
    width: 70%;
}
`
export const Form = styled.form`
width: 45%;
margin: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin-bottom: 15px;

@media(max-width: 930px) {
    width: 80%;
}

@media(max-width: 420px) {
    width: 90%;
}
`
export const DivForm = styled.div`
border-radius: 7px;
border: 2px solid #F38D68;
border-top: 15px solid #F38D68;
padding: 2% 5%;
box-shadow: 15px 10px rgba(0, 0, 0, 0.2);
background-color: #F2F2F2;
flex-basis: 100%;
margin-bottom: 15px;

&> label {
    display: block;
    text-align: center;
}
`
export const DivLabel = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

@media (max-width: 420px) {
    flex-direction: column;
    height: 50px;
}
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

@media (max-width: 420px) {
    width: 90%;   
}
`
export const Span = styled.span`
display: block;
`
