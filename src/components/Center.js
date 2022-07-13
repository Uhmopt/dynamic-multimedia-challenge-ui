import React from "react";

export default function Center({ children = null, className = "", ...props }) {
  return (
    <div className={"flex justify-center items-center " + className}>
      {children}
    </div>
  );
}
