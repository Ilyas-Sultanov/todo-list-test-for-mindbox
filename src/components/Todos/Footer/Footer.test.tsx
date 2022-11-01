import {render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";

const onChange = jest.fn();
const onClear = jest.fn();

describe('Footer component', () => {
  test('Check render Footer', () => {
    render(
      <Footer 
        visibleStatus={0}
        totalCount={5}
        completedCount={2}
        onChangeVisibleStatus={onChange}
        onClear={onClear}
      />
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  }),

  test('Check items count', () => {
    render(
      <Footer 
        visibleStatus={0}
        totalCount={5}
        completedCount={2}
        onChangeVisibleStatus={onChange}
        onClear={onClear}
      />
    );
    const info = screen.getByText('3 items');
    expect(info).toBeInTheDocument();
  }),

  test('Check onChangeVisibleStatus fn', () => {
    render(
      <Footer 
        visibleStatus={1}
        totalCount={5}
        completedCount={0}
        onChangeVisibleStatus={onChange}
        onClear={onClear}
      />
    );
    const allBtn = screen.getByText('All');
    const activeBtn = screen.getByText('Active');
    const completedBtn = screen.getByText('Completed');
    fireEvent.click(allBtn);
    fireEvent.click(activeBtn);
    fireEvent.click(completedBtn);
    expect(onChange).toHaveBeenCalledTimes(3);
  }),

  test('Check onClear fn', () => {
    render(
      <Footer 
        visibleStatus={1}
        totalCount={5}
        completedCount={2}
        onChangeVisibleStatus={onChange}
        onClear={onClear}
      />
    );
    const clearBtn = screen.getByText('Clear Completed');
    fireEvent.click(clearBtn);
    expect(onClear).toHaveBeenCalledTimes(1);
  }),

  test('No clear button', () => {
    render(
      <Footer 
        visibleStatus={0}
        totalCount={5}
        completedCount={0}
        onChangeVisibleStatus={onChange}
        onClear={onClear}
      />
    );

    const clearBtn = screen.queryByText('Clear Completed');
    expect(clearBtn).toBeNull();
  })

})