import React from "react";
import { FlexDiv } from "../ui";

const Navigator = props => {
  function clickNext() {
    props.onClickNext();
  }
  function clickBack() {
    props.onClickBack();
  }
  return (
    <FlexDiv justify="flex-end">
      <button type="button" className="btn btn-info mr-3" onClick={clickBack}>
        BACK
      </button>
      <button type="button" className="btn btn-info" onClick={clickNext}>
        NEXT
      </button>
    </FlexDiv>
  );
};

export default Navigator;
