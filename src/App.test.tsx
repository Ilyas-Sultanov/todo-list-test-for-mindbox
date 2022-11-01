import {render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe('App component', () => {
  test('Check app render', () => {
    render(<App/>);
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
  })

  test('Integration test', () => {
    render(<App/>);

    const form = screen.getByTestId('form');
    const input = screen.getByRole('textbox');
    const allBtn = screen.getByTestId('all-btn');
    const activeBtn = screen.getByTestId('active-btn');
    const completedBtn = screen.getByTestId('completed-btn');

    fireEvent.input(input, {target: {value: 'test1'}});
    expect(screen.getByDisplayValue('test1')).toBeInTheDocument();    
    fireEvent.submit(form);
    const todoText1 = screen.getByText('test1');
    expect(todoText1).toBeInTheDocument();

    fireEvent.input(input, {target: {value: 'test2'}});
    expect(screen.getByDisplayValue('test2')).toBeInTheDocument();
    fireEvent.submit(form);
    const todoText2 = screen.getByText('test2');
    expect(todoText2).toBeInTheDocument();

    const checkboxes = screen.queryAllByRole('checkbox');
    expect(checkboxes.length).toEqual(2);
    expect(screen.queryByTestId('clear-btn')).toBeNull();

    fireEvent.click(checkboxes[0]);
    expect(screen.getByText('1 items left')).toBeInTheDocument();
    
    fireEvent.click(activeBtn);
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.queryByText('test2')).toBeNull();
    expect(screen.getByText('1 items')).toBeInTheDocument();
    expect(screen.queryByTestId('clear-btn')).toBeNull();

    fireEvent.click(completedBtn);
    expect(screen.getByText('test2')).toBeInTheDocument();
    expect(screen.queryByText('test1')).toBeNull();
    expect(screen.getByText('1 items')).toBeInTheDocument();
    expect(screen.getByTestId('clear-btn')).toBeInTheDocument();

    fireEvent.click(allBtn);
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.getByText('test2')).toBeInTheDocument();
    expect(screen.getByText('1 items left')).toBeInTheDocument();
    expect(screen.getByTestId('clear-btn')).toBeInTheDocument();
  })

})