import {render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

const onSubmit = jest.fn();

describe('Form component', () => {
  test('Check form render', () => {
    render(<Form onSubmit={onSubmit}/>);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  })

  test('Check input change', () => {
    render(<Form onSubmit={onSubmit}/>);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target: {value: 'test'}});
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  })

  test('Check onSubmit fn', () => {
    render(<Form onSubmit={onSubmit}/>);
    const form = screen.getByTestId('form');
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  })
})