import { Typography } from "@mui/material";
import React from "react";

export default function CustomTypo({
  className = "",
  children = null,
  variant = "inherit",
  color = "inherit",
}) {
  return (
    <Typography variant={variant} color={color} className={className}>
      {children}
    </Typography>
  );
}
