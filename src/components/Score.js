import React from "react";

const Score = ({ totalLength, currentQuestionIndex }) => {
  return (
    <p>
      {currentQuestionIndex + 1}/{totalLength}
    </p>
  );
};

export default Score;
