import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;

  span {
    color: red;
  }

  label {
    font-size: 18px;
  }

  input,
  textarea {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;

    &:focus {
      border-color: #0077cc;
    }
  }

  button[type="submit"] {
    background-color: #0077cc;
    color: white;
    padding: 8px 16px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #005fa3;
    }
  }
`;
