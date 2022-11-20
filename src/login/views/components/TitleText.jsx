import styled from 'styled-components'
const Title = styled.h1`
margin-top:30px;
font-size:25px;
`

const TitleText = (props) => {
    return (
        <Title>{props.title}</Title>
    );
  };

  export default TitleText