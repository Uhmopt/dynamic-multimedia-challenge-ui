import { Clear, Done } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import QuestionAnimation from "./animations/QuestionAnimation";

export default function ConfirmModal({
  isOpen = false,
  title = "Are you sure?",
  message = "Are you sure?",
  handleYes = () => {},
  handleNo = () => {},
  onYes = () => {},
  onNo = () => {},
  titleYes = "Yes",
  titleNo = "No",
  iconNo = "",
  footer = "",
  ...props
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        handleNo();
        onNo();
      }}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{title || "Are you sure?"}</DialogTitle>
      {message ? (
        <DialogContent>{message}</DialogContent>
      ) : (
        <QuestionAnimation />
      )}
      <DialogActions>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item>
            <Button
              onClick={() => {
                handleYes();
                onYes();
              }}
              startIcon={<Done />}
              variant="contained"
              color="success"
            >
              {titleYes ?? "Yes"}
            </Button>
          </Grid>
          <Grid item>
            {Boolean(titleNo === "No") ? (
              <Button
                onClick={() => {
                  handleNo();
                  onNo();
                }}
                startIcon={<Clear />}
                variant="outlined"
                color="primary"
              >
                No
              </Button>
            ) : (
              <Button
                color="inherit"
                variant="contained"
                onClick={() => {
                  handleNo();
                  onNo();
                }}
                startIcon={iconNo}
              >
                {titleNo}
              </Button>
            )}
          </Grid>
          {footer ? <Grid item>{footer}</Grid> : null}
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
