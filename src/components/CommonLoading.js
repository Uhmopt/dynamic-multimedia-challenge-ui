import { Backdrop } from "@mui/material";
import { useSelector } from "react-redux";
import LoadingAnimation from "./animations/LoadingAnimation";

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
