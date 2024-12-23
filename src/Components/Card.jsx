import React, { useState, useEffect } from "react";
import "./card.css";
import { GiMagicBroom } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "motion/react";

const Card = ({
  note,
  removeCard,
  Index,
  reference,
  counter,
  updateNote,
  clearNote,
}) => {
  const [noteText, setNoteText] = useState(note);

  useEffect(() => {
    setNoteText(note);
  }, [note]);

  const handleChange = (event) => {
    setNoteText(event.target.value);
    updateNote(Index, event.target.value);
  };

  const handleClearNote = () => {
    setNoteText("");
    clearNote(Index);
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="absolute top-0 left-5 pt-[80px]  "
    >
      <div className="w-[350px] h-[400px] bg-zinc-900 rounded-[30px] text-white py-3 px-3 shadow-lg shadow-neutral-700 ">
        {noteText && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              scale: { type: "spring", visualDuration: 0.2, bounce: 0.3 },
            }}
            className="flex justify-between px-3 py-2"
          >
            <span className=" font-mono text-zinc-600">{counter}.</span>
            <span className="flex items-center space-x-5">
              <GiMagicBroom
                className="cursor-pointer"
                onClick={() => handleClearNote()}
              />
              <IoMdCloseCircle
                className="cursor-pointer text-zinc-600"
                size={20}
                onClick={() => {
                  removeCard(Index);
                }}
              />
            </span>
          </motion.span>
        )}
        <textarea
          name="Note"
          placeholder="Write a Note."
          className="bg-zinc-900 h-[85%] w-[100%] mt-3 rounded-md border-none outline-none resize-none font-normal text-md p-3  custom-scroll "
          value={noteText}
          onChange={handleChange}
          spellCheck="false"
        />
      </div>
    </motion.div>
  );
};

export default Card;
