import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ConfirmButton from "components/ConfirmButton";
import CustomTypo from "components/CustomTypo";

export default function ReadingListCard({
  title = "",
  caption = "",
  onDelete = () => {},
}) {
  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        <ConfirmButton onClick={() => onDelete()}>
          <IconButton>
            <Close />
          </IconButton>
        </ConfirmButton>
      </div>
      <div className="bg-warning bg-opacity-10 p-4">
        <CustomTypo variant="h3" color="black">
          {title ?? ""}
        </CustomTypo>
        <div className="text-warning py-2">
          <CustomTypo>{caption ?? ""}</CustomTypo>
        </div>
      </div>
    </div>
  );
}
