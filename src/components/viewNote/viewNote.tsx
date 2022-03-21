import React from "react";
import { useParams } from "react-router";

const ViewNote: React.FC = () => {
    const {notesId} = useParams();
    return (
        <h1>{notesId}</h1>
    )
}

export default ViewNote;