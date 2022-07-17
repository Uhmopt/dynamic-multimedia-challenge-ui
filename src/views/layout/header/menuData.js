import { Code, GitHub, Html } from "@mui/icons-material";
import { REPOSITORY_API } from "config";
import { REPOSITORY } from "config";
import { GITHUB } from "config";
import React from "react";

export const MENU_DATA = [
  { label: "GITHUB", to: GITHUB, icon: <GitHub /> },
  { label: "Frontend", to: REPOSITORY, icon: <Html /> },
  { label: "Backend", to: REPOSITORY_API, icon: <Code /> },
];
