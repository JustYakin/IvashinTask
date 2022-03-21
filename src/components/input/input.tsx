import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTag } from "../../redux/actions/actions";

const findTag = (str: String) => {
    return str.split(' ').filter((item: string) => item.includes('#')).join('');
}

const Input: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
   const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleClick = () => {
       dispatch(addTag(inputValue))
    }

    const handleBlur = () => {
        setInputValue(findTag(inputValue));
    }

    return (
        <div>
            <input type="text" onChange={handleChange} onBlur={handleBlur} />
            <button onClick={handleClick}>add</button>
        </div>
    )
}

export default Input;