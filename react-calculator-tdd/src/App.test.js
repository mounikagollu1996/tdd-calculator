import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

describe("Calculator Functionality tests",() => {
  test("renders calculator UI",()=>{
    render(<App/>);
    expect(screen.getByText("Result:")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("input numbers and operators correctly",()=>{
    render(<App/>);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("2"));

    const inputElement = screen.getByRole("textbox");
    expect(inputElement.value).toBe("1+2");
  });
});
