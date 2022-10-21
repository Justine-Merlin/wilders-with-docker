import { ChangeEvent } from 'react'

type Props = {
    type: string;
    name: string;
    label: string;
    onChangeFunction: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number | undefined;
}
const FormInput = ({ type, name, label, onChangeFunction, value }: Props) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChangeFunction}
            />

        </>
    )
}

export default FormInput