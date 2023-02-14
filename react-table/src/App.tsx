import { useMemo } from 'react'
import { Column } from 'react-table'
import FilterTable from './components/FilterTable'
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

const persons: Person[] = [
  {
    name: 'sofyan',
    age: 31
  },
  {
    name: 'sofyan',
    age: 31
  },
]


function App() {

  const mycolumns = useMemo(() => columns, [])
  const data = useMemo(() => persons, [])


  return (
    <div className="relative overflow-x-auto max-w-[90vh] mx-auto my-[2rem]">
      <h1 className='text-xl font-semibold text-slate-500 my-4'>Simple Table</h1>
      <SimpleTable columns={mycolumns} data={data} />
      <h1 className='text-xl font-semibold text-slate-500 my-4'>Filter Table</h1>
      <FilterTable columns={mycolumns} data={data} />
    </div>


  )
}

export default App
