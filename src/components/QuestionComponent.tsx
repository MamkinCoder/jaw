import React, { FC, useContext } from "react";
import Answer from "./AnswerComponent";
import QuestionText from "./QuestionTextComponent";
import styles from "../../styles/layout.module.css";
import { QuestionNumberContext } from "../app/page";

interface QuestionComponentProps {
  text: string;
  answers: string[];
}

const Question: FC<QuestionComponentProps> = ({ text, answers }) => {
  const QuestionNumber = useContext(QuestionNumberContext);
  // console.log(QuestionNumber);
  return (
    <>
      <div className={styles.divider}></div>
      <QuestionText text={`${0}: ${text}`} />
      <Answer answers={answers} />
    </>
  );
};

export default Question;
