import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 62px;
    width: 80%;
    margin: 20px;

    input {
        background: transparent;
        border: 0;
        width: 91%;
        height: 62px;
        padding: 0 20px;
        color: #FAFAFA;
        font-size: 20px;
    }

    input:focus{
        border-radius: 20px;
        outline: 0.1px solid #069478;
    }
`