import React from "react";
import AudioPlayer from "./AudioPlayer";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="audio-player">
        <AudioPlayer
          src={props.phonetic.audio}
          autoPlay={false}
          controls
        />
      </div>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}