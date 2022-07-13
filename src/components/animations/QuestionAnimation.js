import question from "assets/animation/lottie/question.json";
import React from "react";
import LottieIcon from "./LottieIcon";

export default function QuestionAnimation({
  width = window.innerWidth < 600 ? 150 : 300,
}) {
  return (
    <div>
      <LottieIcon width={width} data={question} loop={false} />
    </div>
  );
}
