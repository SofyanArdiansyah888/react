interface Person{
    id: number,
    name: string
}

interface ITableProps{
    Persons : Person[]
}

export default function Table({Persons: rows} : ITableProps ): JSX.Element {
  return (
    <>
      {rows.map(({ id, name }) => (
        <div key={id} role="table">{name}</div>
      ))}
    </>
  );
}
