import { Tooltip } from "@mui/material";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

export default function ConfirmButton({
  onClick = () => {},
  title = "",
  message = "",
  children = "",
}) {
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleConfirm = () => {
    setOpenConfirm(false);
    onClick();
  };

  const handleClick = () => {
    setOpenConfirm(true);
  };

  return (
    <div className="flex-center">
      <ConfirmModal
        title={title}
        message={message}
        isOpen={openConfirm}
        onYes={handleConfirm}
        onNo={() => {
          setOpenConfirm(false);
        }}
      />
      <Tooltip onClick={handleClick} title={title}>
        <div className="flex-center">{children}</div>
      </Tooltip>
    </div>
  );
}
