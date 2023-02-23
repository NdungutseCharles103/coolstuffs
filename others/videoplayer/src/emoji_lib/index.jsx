import React, { useState } from "react";
import emojis from "./emoji.json";
import "./index.css";

const Emoji = () => {
  const [filtered, setFiltered] = useState(emojis.emojis)

  

  return (
    <div className="emoji">
      <div className="sort">
        <p className="stext"
        onClick={()=> setFiltered(filtered.filter(f=> f.category.includes("people")))}
        >people</p>
        <p className="stext">smile</p>
        <p className="stext">objects</p>
      </div>
      <div className="grid">
        {filtered.map((emoji, index) => (
          <One key={index} emoji={emoji} />
        ))}
      </div>
    </div>
  );
};

export default Emoji;

function One({emoji}){

  return(
    <p>{emoji.emoji}</p>
  )
}