import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

describe("Calculator Functionality tests",() => {
  test("renders calculator UI",()=>{
    render(<App/>);
    expect(screen.getByText("Result:")).toBeInTheDocument();
  });
});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
