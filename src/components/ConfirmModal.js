import { Clear, Done } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

export default function ConfirmModal({
  isOpen = false,
  title = "Are you sure?",
  message = "Are you sure?",
  handleYes = console.log,
  handleNo = console.log,
  onYes = console.log,
  onNo = console.log,
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
      fullScreen={useMediaQuery(useTheme().breakpoints.down("sm"))}
    >
      <DialogTitle>{title || "Are you sure?"}</DialogTitle>
      {message ? <DialogContent>{message}</DialogContent> : null}
      <DialogActions>
        <Grid
          container
          spacing={1}
          justifyContent="flex-end"
          alignItems="center"
        >
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
          <Grid item>{footer}</Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
