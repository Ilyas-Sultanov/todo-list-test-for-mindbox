import {render, screen, fireEvent } from "@testing-library/react";
import Todo from "./Todo";
import { ITodo } from "../types";

const onChange = jest.fn();

const todo: ITodo = {id: '1', title: 'some title 1', completed: false};

describe('Todo component', () => {
  test('Check render Todo', () => {
    render(<Todo index={1} onChange={onChange} {...todo}/>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  }),

  test('Check onChange fn', () => {
    render(<Todo index={1} onChange={onChange} {...todo}/>);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
  })
})