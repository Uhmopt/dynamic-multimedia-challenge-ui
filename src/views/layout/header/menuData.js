import { Code, GitHub } from "@mui/icons-material";
import { REPOSITORY } from "config";
import { GITHUB } from "config";
import React from "react";

export const MENU_DATA = [
  { label: "GITHUB", to: GITHUB, icon: <GitHub /> },
  { label: "Code", to: REPOSITORY, icon: <Code /> },
];
