import { Backdrop } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingAnimation from "./LoadingAnimation";

export default function CommonLoading() {
  const isLoading = useSelector((state) => state?.app?.isLoading ?? false);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.snackbar - 1 }}
        open={isLoading}
      >
        <LoadingAnimation />
      </Backdrop>
    </div>
  );
}
