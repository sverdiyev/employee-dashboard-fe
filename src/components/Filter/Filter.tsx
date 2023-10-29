import {FC} from "react";
import {SelectStyles} from "./Filter.styles.tsx";

interface Option {
    id: string,
    title: string,
}

interface FilterProps {
    title: string,
    options?: Option[],
}

const Filter: FC<FilterProps> = ({title, options}) => {
    return (
        <SelectStyles>
            <option>{title}</option>
            {options?.map(option => {
                return (
                    <option key={option.id}>{option.title}</option>
                )
            })}
        </SelectStyles>
    )
}
export default Filter;