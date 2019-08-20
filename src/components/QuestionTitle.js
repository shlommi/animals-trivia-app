import React from "react";
import { FlexDiv } from "../ui";

import Score from "./Score";

const QuestionTitle = ({ category, totalLength, currentQuestionIndex }) => {
  return (
    <FlexDiv justify="space-around">
      <p> {category.category}</p>
      <Score
        totalLength={totalLength}
        currentQuestionIndex={currentQuestionIndex}
      />
    </FlexDiv>
  );
};

export default QuestionTitle;
