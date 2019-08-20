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
    if (
      this.state.currentQuestionIndex ===
      this.state.allQuestions.length - 1
    ) {
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
    const totalLength = this.state.allQuestions.length;
    const currentQuestion = this.state.allQuestions[
      this.state.currentQuestionIndex
    ];
    const index = this.state.currentQuestionIndex;

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
  text-align: left;
  color: #444444;
  min-width: 1000px;
  min-height: 600px;
`;

// ===========================================================
// const App = () => {
//   const [all, setAll] = useState([]);
//   const [category, setCategory] = useState("");
//   const [question, setQuestion] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [indexOfQuestion, setIndexOfQuestion] = useState();

//   useEffect(() => {
//     axios
//       .get("db.json")
//       .then(res => {
//         setAll(res.data.results);
//         setCategory(res.data.results[0].category);
//         setQuestion(res.data.results[0].question);
//         setAnswers(
//           res.data.results[0].incorrect_answers.concat(
//             res.data.results[0].correct_answer
//           )
//         );
//         setIndexOfQuestion(question.indexOf());
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const nextQuestion = index => {
//     return index++;
//   };

//
// };
