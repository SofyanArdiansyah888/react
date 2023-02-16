import { render, screen } from "@testing-library/react";
import Person from "./Index";

test('describe person test', () => {
    render(<Person name="sofyan" />)
    const divPerson = screen.getByRole('person');
    expect(divPerson).toHaveTextContent('sofyan');
});