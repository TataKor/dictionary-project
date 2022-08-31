import React from "react";
import AudioPlayer from "./AudioPlayer";
import "./Phonetic.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      {props.phonetics.map((phonetic, index) => {
        if (phonetic.audio && phonetic.text) {
          return (
            <div key={index}>
              <AudioPlayer audio={phonetic.audio} />
              <h3>{phonetic.text}</h3>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}


// Or audio link on the next page
//import React from "react";
//import "./Phonetic.css";

//export default function Phonetic(props) {
  //return (
   // <div className="Phonetic">
     // <a href={props.phonetic.audio} target="blank"
      // rel="noreferrer">
       // Listen
     // </a>
     // <span className="text">{props.phonetic.text}</span>
   // </div>
 // );
//}