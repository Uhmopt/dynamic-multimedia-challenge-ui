import book from "assets/animation/lottie/book.json";
import React from "react";
import LottieIcon from "./LottieIcon";

export default function LoadingAnimation({
  width = window.innerWidth < 600 ? 200 : 300,
}) {
  return (
    <div>
      <LottieIcon width={width} data={book} loop={true} />
    </div>
  );
}
