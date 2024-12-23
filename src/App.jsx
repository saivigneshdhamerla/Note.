import React, { useEffect, useState } from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";
import AddBtn from "./Components/AddBtn";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    setNotes([...notes, ""]);
  };
  // console.log("notes", notes);

  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground notes={notes} setNotes={setNotes} addNote={addNote} />
      <AddBtn onAddNote={addNote} />
    </div>
  );
};

export default App;
