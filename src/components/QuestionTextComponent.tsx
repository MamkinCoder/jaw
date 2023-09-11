import React, { FC } from "react";

interface QuestionTextComponentProps {
  // Define your component's prop types here
  text: string;
}

const QuestionText: FC<QuestionTextComponentProps> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default QuestionText;
