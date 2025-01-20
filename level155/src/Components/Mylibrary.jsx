import React from "react";

const MyLibrary = ({ MyLibrary }) => {
    return (
        <div className="my-library">
            <h2>My library</h2>
            {MyLibrary.length === 0 ? (
                <p>No Books added yet.</p>
            ) : (
            <ul>
                {MyLibrary.map((book)) => (
                    <li key={book.id}>
                        <h3>{book.volumeInfo.title}</h3>
                        <p>{book.volumeInfo.authors?.join(",")}</p>
                    </li>
                ))}
            </ul>
        )}
        </div>
    );
};

export default MyLibrary;