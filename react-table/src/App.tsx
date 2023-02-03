import { Column } from 'react-table'
import SimpleTable from './components/SimpleTable'
import Person from './models/Person'

const columns: Column<Person>[] = [
  {
    Header: 'Nama',
    accessor: 'name'
  },
  {
    Header: 'Umur',
    accessor: 'age'
  },
]

const data: Person[] = [
  {
    name: 'sofyan',
    age: 31
  }
]


function App() {

  return (
    <div className="relative overflow-x-auto max-w-[90vh] mx-auto my-[2rem]">
      <SimpleTable columns={columns} data={data} />
    </div>


  )
}

export default App
