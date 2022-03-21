import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../../App";
import useDebounce from "../../../../hooks/useDebounce";
import { addTag, deleteNote, editNote } from "../../../../redux/actions/actions";

interface iProps {
    onClose: (event: any) => void;
    id: string;
}

const findTag = (str: string): string => {
    return str.split(' ').filter((item: string) => item.includes('#')).join('');
}

// const removeTagsFromString = (str: string): string => {
//     return str.split(' ').filter((item: string) => !item.includes('#')).join(' ');
// }

const EditNote: React.FC<iProps> = ({ onClose, id }) => {
    const [inputValue, setInputValue] = useState('');
    const note = useSelector((state: State) => state.notes.data.filter((note) => note === id).join(" "));
    const dispatch = useDispatch();

    const debounceValue = useDebounce(inputValue, 700)

    useEffect(() => {
        if (debounceValue) {
            const result = findTag(debounceValue);
            if (!!result) {
                dispatch(addTag(result));
            }
            dispatch(editNote(debounceValue))
        }
    }, [dispatch, debounceValue])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleClick = (event: any) => {
        dispatch(deleteNote(note))
        onClose(event)
    }

    return (
        <div>
            <input defaultValue={note} onChange={handleChange} />
            <button onClick={handleClick}>delete note</button>
            <button onClick={onClose}>close modal</button>
        </div>
    )
}

export default EditNote;
