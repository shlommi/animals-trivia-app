import React, { Component } from "react";

import { FlexDiv } from "../ui";
import styled from "styled-components";

export default class QuestionBody extends Component {
  handleChooseAnswer = i => {
    const userAnswer = i;
    this.props.onSelectAnswer(userAnswer);
  };
  render() {
    const { allQuetions, didUserChoosed, index } = this.props;
    return (
      <Wrapper>
        <FlexDiv column="column" marginTop="3rem">
          {allQuetions[index].question}
        </FlexDiv>
        <AnswersWrapper marginTop="5rem" justify="center">
          {allQuetions[index].answers.map((answer, i) => (
            <button
              key={answer}
              type="button"
              className="btn btn-primary mr-3"
              onClick={() => this.handleChooseAnswer(i)}
              disabled={didUserChoosed}
            >
              {answer}
            </button>
          ))}
        </AnswersWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const AnswersWrapper = styled(FlexDiv)`
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: space-around;
    justify-self: center;
    height: 260px;
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`;
