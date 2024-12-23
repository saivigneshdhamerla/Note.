import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = ({ notes, setNotes }) => {
  const ref = useRef(null);

  const removeCard = (index) => {
    setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
  };

  const clearNote = (index) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index] = ""; // Clear the note at the specified index
      return updatedNotes;
    });
  };

  const updateNote = (index, newText) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index] = newText; // Update the note at the specified index
      return updatedNotes;
    });
  };

  return (
    <div>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full p-5 ">
        {notes.map((note, index) => {
          console.log(note);
          return (
            <Card
              key={index}
              note={note}
              removeCard={removeCard}
              Index={index}
              reference={ref}
              counter={index + 1}
              clearNote={clearNote}
              updateNote={updateNote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Foreground;
