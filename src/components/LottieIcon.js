import successData from "assets/animation/lottie/success.json";
import React from "react";
import Lottie from "react-lottie";

export default function LottieIcon({
  width = 200,
  data = successData,
  loop = false,
}) {
  const defaultOptions = {
    loop: loop,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={width} width={width} />
    </div>
  );
}
