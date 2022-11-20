import styled from 'styled-components'

const UniForm = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const UniInput = styled.input`
padding: 20px;
border-radius: 12px;
border-color: gray;
`
const UniLabel = styled.label`
text-align: left;
margin:10px 10px;
`



const UlForm = (props) => {
    return (
        <UniForm>
        <UniLabel>{props.form}</UniLabel>
        <UniInput
          type="text"
          name="form"
          placeholder={props.form}
        />
      </UniForm>
    );
  };

  export default UlForm