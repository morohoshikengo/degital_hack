import styled from 'styled-components'


const Button = styled.button`
background: #2ea4b3;
margin:20px 20px;
border: none;
border-radius: 20px;
color: white;
padding:10px 60px;
font-size: 15px;
`;

const ButtonStyle = (props) => {
  return (
      <Button onClick={props.hoge}>{props.title}</Button>
  );
};



export default ButtonStyle