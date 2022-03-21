import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import EditNote from "./components/editNote/editNote";

import './styles.css';

Modal.setAppElement("#root");

interface iProps {
    notes: string[];
}

const ListNotes: React.FC<iProps> = ({ notes }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState('');

    const toggleModal = (event: any) => {
        setIsOpen(!isOpen);
        setId(event.target.id);
    }
    
    return (
        <div className="container-notes">
            {notes.map((note, i) => {
                return (
                    <React.Fragment key={String(i)}>
                        <Link to={`/notes/${note}`}>
                            <div>
                                {note}
                            </div>
                        </Link>
                        <button id={note} onClick={toggleModal}>Edit</button>
                    </React.Fragment>
                )
            })}

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Edit Note"
                children={<EditNote onClose={toggleModal} id={id}/>}
            />
        </div>
    )
}

export default ListNotes;