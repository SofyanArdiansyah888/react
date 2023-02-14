import Person from "../models/Person";
import { Column } from 'react-table'
export default interface ITableProps {
    data: Person[],
    columns: Column<Person>[]
}