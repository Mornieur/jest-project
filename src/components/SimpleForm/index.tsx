import React, { useState } from "react";
import * as S from "./styles";

interface FormValues {
  name: string;
  email: string;
  message: string;
  cep: string;
}

const initialFormValues: FormValues = {
  name: "",
  email: "",
  message: "",
  cep: "",
};

const SimpleForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormValues>(initialFormValues);

  const validateForm = (): boolean => {
    const errors: FormValues = {} as FormValues;

    if (!formValues.name) {
      errors.name = "*Por favor, digite seu nome";
    }

    if (!formValues.email) {
      errors.email = "*Por favor, digite seu email";
    }

    if (!formValues.message) {
      errors.message = "*Por favor, digite sua mensagem";
    }

    if (!formValues.cep) {
      errors.cep = "*Por favor, digite seu CEP";
    } else if (formValues.cep.length !== 8 || isNaN(Number(formValues.cep))) {
      errors.cep = "*Por favor, digite um CEP válido";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (validateForm()) {
      console.log(formValues);
      setFormValues(initialFormValues);
      setFormErrors(initialFormValues);
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      {formErrors.name && <span>{formErrors.name}</span>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      {formErrors.email && <span>{formErrors.email}</span>}

      <label htmlFor="cep">CEP:</label>
      <input
        type="text"
        id="cep"
        name="cep"
        value={formValues.cep}
        onChange={handleInputChange}
      />
      {formErrors.cep && <span>{formErrors.cep}</span>}

      <label htmlFor="message">Mensagem:</label>
      <textarea
        id="message"
        name="message"
        value={formValues.message}
        onChange={handleInputChange}
      />
      {formErrors.message && <span>{formErrors.message}</span>}

      <button type="submit">Enviar</button>
    </S.FormContainer>
  );
};

export default SimpleForm;
