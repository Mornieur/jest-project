import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SimpleForm from "../components/SimpleForm";

describe("SimpleForm", () => {
  it("should not submit form if there are blank fields", () => {
    const { getByLabelText, getByText } = render(<SimpleForm />);
    const nameInput = getByLabelText("Nome:") as HTMLInputElement;
    const emailInput = getByLabelText("Email:") as HTMLInputElement;
    const messageInput = getByLabelText("Mensagem:") as HTMLTextAreaElement;
    const submitButton = getByText("Enviar");

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(messageInput, { target: { value: "Hello world" } });
    fireEvent.click(submitButton);

    expect(
      screen.getByText("*Por favor, digite seu email")
    ).toBeInTheDocument();
  });

  it("should submit form if all fields are filled", () => {
    const { getByLabelText, getByText } = render(<SimpleForm />);
    const nameInput = getByLabelText("Nome:") as HTMLInputElement;
    const emailInput = getByLabelText("Email:") as HTMLInputElement;
    const messageInput = getByLabelText("Mensagem:") as HTMLTextAreaElement;
    const submitButton = getByText("Enviar");

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello world" } });
    fireEvent.click(submitButton);

    expect(
      screen.queryByText("*Por favor, digite seu email")
    ).not.toBeInTheDocument();
  });
});
