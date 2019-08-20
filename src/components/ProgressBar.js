import React from "react";
import styled from "styled-components";
import { FlexDiv } from "../ui";

const ProgressBar = props => {
  return (
    <Wrapper marginTop="10px">
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
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled(FlexDiv)`
  width: 100%;
  display: inline-block;
`;
