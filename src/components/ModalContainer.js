import { Close, Done, Save } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { APP_NAME } from "config";
import { darkTheme } from "theme";

export default function ModalContainer({
  isOpen = false,
  setIsOpen = () => {},
  title = APP_NAME,
  size = "sm",
  children = null,
  onOk = null,
  onSave = null,
  onClose = () => {},

  closeLabel = "Close",
  saveLabel = "Save",

  ...props
}) {
  const handleClose = () => {
    onClose();
    setIsOpen(() => false);
  };

  const handleSave = () => {
    onSave(handleClose);
  };

  const handleOk = () => {
    onOk(handleClose);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={size}
        fullScreen={useMediaQuery(
          useTheme().breakpoints.down(
            size === "xl"
              ? "lg"
              : size === "lg"
              ? "md"
              : size === "md"
              ? "sm"
              : size === "sm"
              ? "xs"
              : "sm"
          )
        )}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent dividers={true}>{children}</DialogContent>
        <DialogActions>
          <Grid container spacing={2} justifyContent="flex-end">
            {typeof onSave === "function" ? (
              <Grid item>
                <Button
                  onClick={handleSave}
                  startIcon={<Save />}
                  variant="outlined"
                  color="success"
                >
                  {saveLabel}
                </Button>
              </Grid>
            ) : null}
            {typeof onOk === "function" ? (
              <Grid item>
                <Button
                  onClick={handleOk}
                  startIcon={<Done />}
                  variant="outlined"
                  color="success"
                >
                  Ok
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                onClick={handleClose}
                startIcon={<Close />}
                variant="outlined"
                color="inherit"
              >
                {closeLabel}
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
