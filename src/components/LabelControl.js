import { Grid } from "@mui/material";
import React from "react";
import CustomTypo from "./CustomTypo";

export default function LabelControl({
  container = true,
  lg = false,
  md = false,
  sm = false,
  xs = false,
  label = "",
  control = "",
}) {
  const clg = lg === false ? false : 12 - lg;
  const cmd = md === false ? false : 12 - md;
  const csm = sm === false ? false : 12 - sm;
  const cxs = xs === false ? false : 12 - xs;
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid
        item
        lg={clg || clg || cmd || csm || cxs}
        md={cmd || clg || cmd || csm || cxs}
        sm={csm || clg || cmd || csm || cxs}
        xs={cxs || clg || cmd || csm || cxs}
      >
        <CustomTypo textAlign="right">{label ?? ""}</CustomTypo>
      </Grid>
      <Grid
        item
        lg={lg || lg || md || sm || xs}
        md={md || lg || md || sm || xs}
        sm={sm || lg || md || sm || xs}
        xs={xs || lg || md || sm || xs}
      >
        {control}
      </Grid>
    </Grid>
  );
}
