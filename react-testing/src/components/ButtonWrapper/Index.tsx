
import { title } from 'process';
import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from 'react'

const ButtonWrapper: FunctionComponent<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    title: string;
}> =
    ({ title, ...props }) => {
        return <button {...props}>{title}</button>
    }
export default ButtonWrapper;
