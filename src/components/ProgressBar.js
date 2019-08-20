import React from "react";
import { Div } from "../ui";

const ProgressBar = props => {
  return (
    <Div marginTop="10px">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${props.progress}%` }}
          aria-valuenow={props.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.progress}%
        </div>
      </div>
    </Div>
  );
};

export default ProgressBar;
