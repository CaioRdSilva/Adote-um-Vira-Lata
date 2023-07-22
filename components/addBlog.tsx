"use client"

import { useState } from 'react';

const AddBlog = () => {

    const [likes, setLikes] = useState(3)
    
    function handleClick(): void {
        setLikes(likes + 1);
    }

    return (
        <div>
            <button className="rounded-full bg-green-900 text-white p-2" onClick={handleClick} >Add new Blog ({likes}) </button>
        </div>
    )
};

export default AddBlog;