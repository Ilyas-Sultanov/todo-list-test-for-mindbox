import {render, screen, fireEvent } from "@testing-library/react";
import List from "./List";
import { ITodo } from "../types";

const todos: Array<ITodo> = [
  {id: '1', title: 'some title 1', completed: false},
  {id: '2', title: 'some title 2', completed: false},
]

describe('List component', () => {
  test('Check render List', () => {
    render(<List todos={[]} onCheckbox={() => {}}/>);
    expect(screen.getByTestId('list')).toBeInTheDocument();
  })

  test('List without todos', () => {
    render(<List todos={[]} onCheckbox={() => {}}/>);
    const checkboxes = screen.queryAllByRole('checkbox');
    expect(checkboxes.length).toEqual(0);
  }),

  test('List with todos', () => {
    render(<List todos={todos} onCheckbox={() => {}}/>);
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toEqual(todos.length);
  })
})