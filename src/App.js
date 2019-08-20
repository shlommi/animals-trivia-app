import React, { Component } from "react";
import styled from "styled-components";
import { FlexDiv } from "./ui";

import axios from "axios";
import "./App.css";

import QuestionTitle from "./components/QuestionTitle";
import ProgressBar from "./components/ProgressBar";
import QuestionBody from "./components/QuestionBody";
import Navigator from "./components/Navigator";

class App extends Component {
  state = {
    allQuestions: [],
    choosenAnswer: null,
    currentQuestionIndex: 0,
    progress: 20
  };

  componentDidMount() {
    axios
      .get("db.json")
      .then(res => {
        this.setState({
          allQuestions: res.data.results
        });
      })
      .catch(err => console.log(err));
  }

  handleNextButton = () => {
    const { currentQuestionIndex, allQuestions } = this.state;
    if (currentQuestionIndex === allQuestions.length - 1) {
      this.setState({
        currentQuestionIndex: 0,
        choosenAnswer: null,
        progress: 20
      });
      return;
    }

    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
      choosenAnswer: null,
      progress: this.state.progress + 20
    });
  };

  handleBackButton = () => {
    if (this.state.currentQuestionIndex === 0) {
      this.setState({
        currentQuestionIndex: 0,
        choosenAnswer: null
      });
      return;
    }

    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex - 1,
      choosenAnswer: null,
      progress: this.state.progress - 20
    });
  };
  userChooseQuestion = userAnswer => {
    this.setState({
      choosenAnswer: userAnswer
    });
  };

  render() {
    const { allQuestions, currentQuestionIndex } = this.state;
    const totalLength = allQuestions.length;
    const currentQuestion = allQuestions[currentQuestionIndex];
    const index = currentQuestionIndex;

    if (!currentQuestion) {
      return null;
    }

    return (
      <>
        <div className="container">
          <WrapperBlock column="column">
            <QuestionTitle
              category={currentQuestion}
              totalLength={totalLength}
              currentQuestionIndex={this.state.currentQuestionIndex}
            />
            <ProgressBar progress={this.state.progress} />
            <QuestionBody
              onSelectAnswer={this.userChooseQuestion}
              index={index}
              allQuetions={this.state.allQuestions}
              didUserChoosed={this.state.choosenAnswer}
            />
            <Navigator
              onClickNext={this.handleNextButton}
              onClickBack={this.handleBackButton}
            />
          </WrapperBlock>
        </div>
      </>
    );
  }
}

export default App;

const WrapperBlock = styled(FlexDiv)`
  background-color: #ffffff;
  padding: 3rem;
  margin-top: 5rem;
  text-align: center;
  color: #444444;

  @media (max-width: 767px) {
    display: flex;
    margin-top: 0;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 320px) {
    display: flex;
    margin-top: 0;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
`;
