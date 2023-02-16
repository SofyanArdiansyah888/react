

interface IPersonProps{
    name: string;
}
export default function Person({name} : IPersonProps) : JSX.Element {

return (<>
    <div role="person">{name}</div>
</>)
}