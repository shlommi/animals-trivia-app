import React from "react";
import styled from "styled-components";
import { FlexDiv } from "../ui";

import Score from "./Score";

const QuestionTitle = ({ category, totalLength, currentQuestionIndex }) => {
  return (
    <Wrapper justify="space-between">
      <p> {category.category}</p>
      <Score
        totalLength={totalLength}
        currentQuestionIndex={currentQuestionIndex}
      />
    </Wrapper>
  );
};

export default QuestionTitle;

const Wrapper = styled(FlexDiv)`
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;
