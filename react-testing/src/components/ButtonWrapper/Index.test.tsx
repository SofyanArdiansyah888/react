import { render, screen, fireEvent } from "@testing-library/react"
import ButtonWrapper from "./Index"

test('Describe ButtonWrapper (Event Handler Test)',() => {
    const onClick = jest.fn();
    render(<ButtonWrapper title="Test" onClick={onClick} />);

    const buttonElement = screen.getByText('Test');
    expect(buttonElement).toHaveTextContent('Test');

    fireEvent.click(buttonElement)
    expect(onClick).toBeCalledTimes(1)
})