import React, { Component } from "react";

import { FlexDiv } from "../ui";
import styled from "styled-components";

export default class QuestionBody extends Component {
  handleChooseAnswer = i => {
    const userAnswer = i;
    this.props.onSelectAnswer(userAnswer);
  };
  render() {
    return (
      <Wrapper>
        <FlexDiv column="column" marginTop="3rem">
          {this.props.allQuetions[this.props.index].question}
        </FlexDiv>
        <FlexDiv marginTop="5rem" justify="center">
          {this.props.allQuetions[this.props.index].answers.map((answer, i) => (
            <button
              key={answer}
              type="button"
              className="btn btn-primary mr-3"
              onClick={() => this.handleChooseAnswer(i)}
              disabled={this.props.didUserChoosed}
            >
              {answer}
            </button>
          ))}
        </FlexDiv>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 20rem;
`;
