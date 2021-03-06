import React from "react";

const DoneFrame = props => {
  return (
    <div className="text-center">
      <h2>{props.doneStatus}</h2>
      <button onClick={props.resetState} className="btn btn-secondary">Play Again</button>
    </div>
  );
};

export default DoneFrame;
