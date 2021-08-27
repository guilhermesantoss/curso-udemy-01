import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";


describe('<TextInput />', () => {
  it('should have a value of inputValue', () => {
    const fn = jest.fn();
    render(
      <TextInput 
        inputValue='testando'
        actionFn={fn}
      />);
      
    const input = screen.getByPlaceholderText(/digite sua pesquisa/i);
    expect(input.value).toBe('testando');
  });

  it('should call actionFn function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput actionFn={fn} />);

    const input = screen.getByPlaceholderText(/digite sua pesquisa/i);
    const value = 'digitando no input';

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput inputValue='testando' actionFn={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});