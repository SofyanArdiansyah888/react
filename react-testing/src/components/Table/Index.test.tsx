import { render, screen } from "@testing-library/react"
import Table from "./Index"

test('Describe Table (Multiple Component Test)',() => {
    const persons = [
        {
            id: 1,
            name: 'taufik'
        }
    ]
    render(<Table Persons={persons} />)
    const tables = screen.getAllByRole('table');
    expect(tables[0]).toHaveTextContent('taufik');
})