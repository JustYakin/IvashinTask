import React from "react";

import './styles.css';

interface iProps {
    tags: string[];
}

const ListTags: React.FC<iProps> = ({ tags }) => {
    if (!tags.length) return null;
    return (
        <div className="container">
            {tags.map((tag) => {
                return (
                    <React.Fragment key={tag.toString()}>
                        <span>{tag.replace('#', '')}</span>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default ListTags;