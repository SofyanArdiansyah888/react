import { useTable, Column, useFilters } from 'react-table'
import Person from '../models/Person'

interface ITableProps {
    data: Person[],
    columns: Column<Person>[]
}

export default function SimpleTable({ data, columns }: ITableProps) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable<Person>({
        data,
        columns
    },
        useFilters);
    return (
        <table {...getTableProps()} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {headerGroups.map((headerGroup) =>
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) =>
                                <th {...column.getHeaderProps()} scope="col" className="px-6 py-3">
                                    {column.render('Header')}
                                </th>)
                        }
                    </tr>)
                }
            </thead>
            <tbody {...getTableBodyProps()}>

                {
                    rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {
                                    row.cells.map((cell) =>
                                        <th {...cell.getCellProps()} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {cell.render('Cell')}
                                        </th>)
                                }

                            </tr>)
                    }
                    )
                }
            </tbody>
        </table>
    )
}
